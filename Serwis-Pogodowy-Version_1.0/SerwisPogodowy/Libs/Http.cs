using System;
using System.IO;
using System.Net;


namespace SerwisPogodowy.Libs
{
    class Http
    {
        public static CookieContainer Cc = new CookieContainer();

        public static string Get(string url)
        {
            var source = string.Empty;

            try
            {
                var req = (HttpWebRequest)WebRequest.Create(url);
                req.CookieContainer = Cc;
                req.Method = "GET";
                req.KeepAlive = true;

                HttpWebResponse response = (HttpWebResponse)req.GetResponse();
                Stream dataStream = response.GetResponseStream();

                if (dataStream != null)
                {
                    using (var reader = new StreamReader(dataStream))
                    {
                        source = reader.ReadToEnd();
                    }

                    req.CookieContainer.Add(response.Cookies);
                    Cc.Add(response.Cookies);
                }
            }

            catch (Exception ex)
            {

                Console.WriteLine("Http.Get method error: {0}", ex);

            }

            return source;

        }
            
    }
        
}

