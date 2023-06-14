namespace SportMakan.PortalVMS
{
    public class PortalVM
    {
            public int VideoLibraryId { get; set; }
            public Guid VideoGuid { get; set; }
            public string VideoURL { get; set; } = string.Empty;
            public string VideoDirectURL { get; set; } = string.Empty;
            public string VideoTitle { get; set; } = string.Empty;
            public string DateUploaded { get; set; } = string.Empty;
            public Guid CollectionId { get; set; }
            public int Views { get; set; }
            public int Width { get; set; }
            public int Height { get; set; }
            public string Category { get; set; } = string.Empty;
            public int AverageWatchTime { get; set; }
            public int TotalWatchTime { get; set; }
    }
}
