using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FSD.Net__Submissions
{
    class Teacher
    {

        public int ID { get; set; }
        public string Name { get; set; }
        public string Classs { get; set; }
        public string Subject { get; set; }
        public string Section { get; set; }

        public Teacher() { }

        public Teacher(int id, string name,  string subject, string classs, string section)
        {
            ID = id;
            Name = name;
            Subject = subject;
            Classs = classs;
            Section = section;
        }

        
    }
    


      
    
}
