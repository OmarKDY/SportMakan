using System;

namespace SportMakan.PortalVMS
{
    public class CollectionVM
    {
        public int VideoLibraryId { get; set; }
        public Guid CollectionGuid { get; set; }
        public string CollectionName { get; set; } = string.Empty;
        public int VideoCount { get; set; }
        public string ImagePath { get; set; } = string.Empty;
    }
}
