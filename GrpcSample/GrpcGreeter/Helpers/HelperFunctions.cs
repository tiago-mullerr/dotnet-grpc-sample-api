using System;
namespace GrpcGreeter.Helpers
{
    public static class HelperFunctions
    {
        public static T ParseCsvLine<T>(string line, string header, string delimiter = ";")
        {
            var parsedObjectList = new List<T>();
            var headers = header.Replace("\"", "").Split(delimiter);
            var values = line.Replace("\"", "").Split(delimiter);
            var headerDictionary = new Dictionary<string, int>();

            var obj = Activator.CreateInstance<T>();
            Type t = obj.GetType();

            foreach (var p in t.GetProperties())
            {
                if (headers.Any(a => a == p.Name))
                {
                    int index = Array.IndexOf(headers, p.Name);
                    p.SetValue(obj, Convert.ChangeType(values[index], p.PropertyType), null);
                }
            }

            return obj;
        }
    }
}

