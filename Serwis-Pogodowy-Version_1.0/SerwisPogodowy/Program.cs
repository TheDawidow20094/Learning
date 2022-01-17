using System;
using SerwisPogodowy.Libs;
using Newtonsoft.Json;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;

namespace SerwisPogodowy
{
    class Program
    {
        public static ConsoleColor DefaultColor = ConsoleColor.White;
        public static ConsoleColor DefaultBgColor = ConsoleColor.Black;

        static void Main(string[] args)
        {

            WeatherService();
            Console.ReadLine();

        }

        static void WeatherService()
        {

            Console.WriteLine("Podaj lokalizację, aby sprawdzić pogodę np: Poznań");
            string typedCity = Console.ReadLine();
            string url = "http://api.openweathermap.org/data/2.5/weather?q=" + typedCity + "&appid=028bf12e2ef6752159bb42e335ea9420";

            string content = Http.Get(url);
            var jsonData = JsonConvert.DeserializeObject<dynamic>(content);

            if (jsonData != null)
            {


                double temperature = jsonData.main.temp;
                double temperatureMin = jsonData.main.temp_min;
                double temperatureMax = jsonData.main.temp_max;
                double lon = jsonData.coord.lon;
                double lat = jsonData.coord.lat;
                string country = jsonData.sys.country;
                double pressure = jsonData.main.pressure;
                double humidity = jsonData.main.humidity;
                double wind = jsonData.wind.speed;
                string town = jsonData.name;


                dynamic[] generalWeatherConditionsArray = jsonData.weather.ToObject<dynamic[]>();
                string generalWeatherConditions = generalWeatherConditionsArray[0].main;


                Console.Clear();
                Console.WriteLine("======================================================================================================================");
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("                                               SERWIS POGODOWY                                                        ");
                Console.ForegroundColor = DefaultColor;
                Console.WriteLine("======================================================================================================================");

                Console.WriteLine("Twoje współrzędne: lon: {0} lat: {1}", lon, lat);
                Console.WriteLine("Miasto: {0}" , town);
                Console.WriteLine("Kraj: {0}{1} ", country, Environment.NewLine);

                Console.WriteLine("Ogólne warunki pogodowe: {0}{1} ", generalWeatherConditions, Environment.NewLine);

                double temp = Math.Round(Kelvin2Celsius(double.Parse(temperature.ToString().Replace('.', ','))));
                double tmin = Math.Round(Kelvin2Celsius(double.Parse(temperatureMin.ToString().Replace('.', ','))));
                double tmax = Math.Round(Kelvin2Celsius(double.Parse(temperatureMax.ToString().Replace('.', ','))));

                Console.WriteLine("Temperatura obecna: {0}\x00B0C", temp);
                Console.ForegroundColor = ConsoleColor.White;
                Console.BackgroundColor = ConsoleColor.Black;
                Console.WriteLine("Temperatura maksymalna: {0}\x00B0C", tmax);
                Console.ForegroundColor = DefaultColor;
                Console.BackgroundColor = DefaultBgColor;
                Console.ForegroundColor = ConsoleColor.White;
                Console.BackgroundColor = ConsoleColor.Black;
                Console.WriteLine("Temperatura minimalna: {0}\x00B0C", tmin);
                Console.ForegroundColor = DefaultColor;
                Console.BackgroundColor = DefaultBgColor;

                Console.WriteLine("Ciśnienie {0}hPa", pressure);
                Console.WriteLine("Wilgotność {0}%", humidity);

                Console.WriteLine(Environment.NewLine);

                double windSpeed = Math.Round(Mps2Kph(double.Parse(wind.ToString().Replace('.', ','))));
                Console.WriteLine("Wiatr: {0}km/h", windSpeed);
                Console.WriteLine("======================================================================================================================");
            }

            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Błąd danych! Sprawdz czy nazwa miasta została wpisana prawidłowo. {0}", Environment.NewLine);
                Console.WriteLine("Sprawdz czy masz połączenie z internetem. Spróbuj ponownie");
                Console.ForegroundColor = DefaultColor;
                WeatherService();
            }

            static double Mps2Kph(double mps)
            {
                return (mps * 3.6);
            }

            static double Kelvin2Celsius(double kelvin)
            {
                return kelvin - 273.15;
            }

            Console.ReadKey();
            Console.Clear();
            WeatherService();
        }
    }
}
