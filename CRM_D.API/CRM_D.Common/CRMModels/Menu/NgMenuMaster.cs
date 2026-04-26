using System;
using System.Collections.Generic;
using System.Text;

namespace CRM_D.Common.CRMModels.Menu
{
    public class NgMenuMaster
    {
        public int menuId { get; set; }
        public string path { get; set; }
        public string title { get; set; }
        public string iconType { get; set; }
        public string icon { get; set; }
        public string className { get; set; }
        public bool? groupTitle { get; set; }
        public string badge { get; set; }
        public string badgeClass { get; set; }
        public int? parentMenuId { get; set; }
        public bool? IsActive { get; set; }
        public bool? showInMenu { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int sortOrder { get; set; }
        public List<NgMenuMaster> submenu { get; set; } = new List<NgMenuMaster>();
    }
}
