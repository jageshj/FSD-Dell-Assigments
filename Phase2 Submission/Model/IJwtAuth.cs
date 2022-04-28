using Phase2_Submission.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Phase2_Submission.Model
{
    public interface IJwtAuth
    {
        string Authentication(string Email, string password, FSDAssignmentContext db);
    }
}
