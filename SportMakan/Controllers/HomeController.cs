using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.CodeDom;
using System.Collections;
using System.Diagnostics;
using System.IO;
using SportMakan.Data;
using SportMakan.Models;
using SportMakan.PortalVMS;
using static Azure.Core.HttpHeader;
using static NuGet.Packaging.PackagingConstants;
using static System.Net.WebRequestMethods;

namespace SportMakan.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<HomeController> _logger;
        private readonly IStringLocalizer<HomeController> _localizer;

        public HomeController(ApplicationDbContext context, ILogger<HomeController> logger, IStringLocalizer<HomeController> localizer)
        {
            _context = context;
            _logger = logger;
            _localizer = localizer;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var collectionVMS = new List<CollectionVM>();
            var client = new RestClient("https://video.bunnycdn.com/library/111009/collections?page=1&itemsPerPage=1000&orderBy=date");
            var request = new RestRequest();
            request.Method = Method.Get;
            request.AddHeader("accept", "application/json");
            request.AddHeader("AccessKey", "01e4c539-9b62-4556-b5fb72b62be0-2d9a-470b");
            RestResponse response = await client.ExecuteAsync(request);
            var json = response.Content;
            JObject jObject = JObject.Parse(json);
            foreach (var item in jObject["items"])
            {
                var collectionVM = new CollectionVM
                {
                VideoLibraryId = (int)item["videoLibraryId"],
                CollectionGuid = (Guid)item["guid"],
                CollectionName = (string)item["name"],
                VideoCount = (int)item["videoCount"],
                ImagePath = $"/img/{(Guid)item["guid"]}.jpg"
				};
                collectionVMS.Add(collectionVM);
            }
            return View(collectionVMS);
        }
        [HttpPost]
        public IActionResult SetLanguage(string culture, string returnUrl)
        {
            Response.Cookies.Append(CookieRequestCultureProvider.DefaultCookieName, CookieRequestCultureProvider.MakeCookieValue
                (new RequestCulture(culture)), new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1)});
            return LocalRedirect(returnUrl);
        }
        [HttpGet]
        public async Task<IActionResult> GetVideoList(int pageNo, string collectionGuid="7dfde02d-4107-4fc1-8626-bbe95a21babd")
        {
                var portalVMS = new List<PortalVM>();
                var client = new RestClient($"https://video.bunnycdn.com/library/111009/videos?page={pageNo}&itemsPerPage=12&collection={collectionGuid}&orderBy=date");
                var request = new RestRequest();
                request.Method = Method.Get;
                request.AddHeader("accept", "application/json");
                request.AddHeader("AccessKey", "01e4c539-9b62-4556-b5fb72b62be0-2d9a-470b");
                RestResponse response = await client.ExecuteAsync(request);
                var json = response.Content;
                JObject jObject = JObject.Parse(json);
                foreach (var item in jObject["items"])
                {
                    var portalVM = new PortalVM
                    {
                        VideoLibraryId = (int)item["videoLibraryId"],
                        VideoGuid = (Guid)item["guid"],
                        VideoTitle = (string)item["title"],
                        DateUploaded = (string)item["dateUploaded"],
                        Views = (int)item["views"],
                        Width = (int)item["width"],
                        Height = (int)item["height"],
                        Category = (string)item["category"],
                        AverageWatchTime = (int)item["averageWatchTime"],
                        TotalWatchTime = (int)item["totalWatchTime"],
                        VideoURL = $"https://vz-55763dd7-a9a.b-cdn.net/{(Guid)item["guid"]}/play_240p.mp4",
                        VideoDirectURL = $"https://video.bunnycdn.com/play/111009/{(Guid)item["guid"]}",
                        CollectionId = (Guid)item["collectionId"],
                    };
                     portalVMS.Add(portalVM);
                }
            ViewBag.TotalItems = jObject["totalItems"];
            ViewBag.ItemsPerPage = jObject["itemsPerPage"];
            ViewBag.CurrentPage = jObject["currentPage"];
            return View(portalVMS);
        }

        public async Task<IActionResult> GetGamesList()
        {
            var gamesList = new List<GamesVM>();
            var gamesPath = Path.Combine("wwwroot", "Games");
            var gamesFolders = Directory.GetDirectories(gamesPath);
            foreach (string item in gamesFolders)
            {
                var gameFolder = Directory.GetDirectories(item).FirstOrDefault(folder =>
                    Directory.GetFiles(Path.Combine(folder), "index.html").Any());

                var gamesVM = new GamesVM
                {
                    GameTitle = new DirectoryInfo(item).Name,
                    GamePath = $"/{item.Substring(item.IndexOf("Games")).Replace("\\", "/")}/game/index.html",
                    Gamethumb = $"/Games/{Path.GetFileName(item)}/thumbs/{Directory.GetFiles(Path.Combine(item, "thumbs")).FirstOrDefault()?.Split('\\').Last()}"
                };
                gamesList.Add(gamesVM);
            }
            return View(gamesList);
        }
        [HttpGet]
        public async Task<IActionResult> AboutUs()
        {
            return View();
        }
        public IActionResult Terms()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}