const brands = [
  {
    id: 1,
    name: "Transtar Moving",
    image: "/images/brands/01-colored.png",
    url: "https://www.transtarmoving.com/"
  },
  {
    id: 2,
    name: "Window Door",
    image: "/images/brands/02-colored.png",
    url: "https://www.windowdoor.com/"
  },
  {
    id: 3,
    name: "BestPass",
    image: "/images/brands/03-colored.png",
    url: "https://bestpass.com/"
  },
  {
    id: 4,
    name: "LCEC",
    image: "/images/brands/04-colored.png",
    url: "https://www.lcec.us/"
  },
  {
    id: 5,
    name: "SAE International",
    image: "/images/brands/05-colored.png",
    url: "https://www.sae.org/"
  },
  {
    id: 6,
    name: "Siemens",
    image: "/images/brands/06-colored.jpg",
    url: "https://new.siemens.com/us/en.html"
  },
  {
    id: 7,
    name: "Industrial Metal Supply",
    image: "/images/brands/07-colored.jpg",
    url: "https://www.industrialmetalsupply.com"
  },
  {
    id: 8,
    name: "SpeedPro",
    image: "/images/brands/08-colored.png",
    url: "https://www.speedpro.com"
  },
  {
    id: 9,
    name: "MGI Speedware",
    image: "/images/brands/09-colored.png",
    url: "https://mgispeedware.com/"
  },
  {
    id: 10,
    name: "UROP",
    image: "/images/brands/10-colored.jpg",
    url: "https://www.urop.uci.edu/"
  },
  {
    id: 11,
    name: "UCI Engineering",
    image: "/images/brands/11-colored.png",
    url: "https://engineering.uci.edu/"
  },
  {
    id: 12,
    name: "CarParts.com",
    image: "/images/brands/12-colored.png",
    url: "https://www.carparts.com/"
  },
  {
    id: 13,
    name: "Airtech International",
    image: "/images/brands/13-colored.png",
    url: "https://www.airtechintl.com/"
  },
  {
    id: 14,
    name: "Flameless Candles",
    image: "/images/brands/14-colored.png",
    url: "https://www.flamelesscandles.com/"
  },
  {
    id: 15,
    name: "Strom Motorsports",
    image: "/images/brands/15-colored.png",
    url: "https://strommotorsports.com/"
  },
  {
    id: 16,
    name: "Hoosier Tire",
    image: "/images/brands/16-colored.png",
    url: "https://www.hoosiertire.com"
  },
  {
    id: 17,
    name: "Chomarat",
    image: "/images/brands/17-colored.png",
    url: "http://chomarat.com/en/"
  },
  {
    id: 18,
    name: "Placeholder",
    image: "/images/brands/18-colored.png",
    url: ""
  },
  {
    id: 19,
    name: "Sonic Tools USA",
    image: "/images/brands/19-colored.png",
    url: "https://sonictoolsusa.com/"
  },
  {
    id: 20,
    name: "Lotus Cars",
    image: "/images/brands/20-colored.png",
    url: "https://www.lotuscars.com/en-US"
  },
  {
    id: 21,
    name: "BMRS",
    image: "/images/brands/21-colored.png",
    url: "https://bmrs.net/"
  },
  {
    id: 22,
    name: "Wilwood",
    image: "/images/brands/22-colored.png",
    url: "https://www.wilwood.com/"
  },
  {
    id: 23,
    name: "TRD USA",
    image: "/images/brands/23-colored.png",
    url: "https://www.trdusa.com/"
  },
  {
    id: 24,
    name: "ADM Works",
    image: "/images/brands/24-colored.png",
    url: "http://www.adm-works.com/"
  },
  {
    id: 25,
    name: "Composites One",
    image: "/images/brands/25-colored.png",
    url: "https://www.compositesone.com/"
  },
  {
    id: 26,
    name: "Burns Stainless",
    image: "/images/brands/26-colored.png",
    url: "https://burnsstainless.com/"
  },
  {
    id: 27,
    name: "Precision Board",
    image: "/images/brands/27-colored.png",
    url: "https://precisionboard.com/"
  },
  {
    id: 28,
    name: "MV Jet",
    image: "/images/brands/28-colored.png",
    url: "https://www.mvjet.com/"
  },
  {
    id: 29,
    name: "Crow Enterprizes",
    image: "/images/brands/29-colored.png",
    url: "http://www.crowenterprizes.com/"
  },
  {
    id: 30,
    name: "NameSilo",
    image: "/images/brands/30-colored.png",
    url: "https://www.namesilo.com/"
  },
  {
    id: 31,
    name: "RapidHarness",
    image: "/images/brands/31-colored.png",
    url: "https://rapidharness.com/"
  },
  {
    id: 32,
    name: "MoTec USA",
    image: "/images/brands/32-colored.png",
    url: "http://www.motecusa.com/"
  },
  {
    id: 33,
    name: "Tonnage Industrial",
    image: "/images/brands/33-colored.jpg",
    url: "https://www.tonnageindustrial.com/"
  },
  {
    id: 34,
    name: "Extreme Canopy",
    image: "/images/brands/34-colored.png",
    url: "https://www.extremecanopy.com/"
  },
  {
    id: 35,
    name: "Extreme Marquees Australia",
    image: "/images/brands/35-colored.png",
    url: "https://www.extrememarquees.com.au/"
  },
  {
    id: 36,
    name: "Extreme Marquees New Zealand",
    image: "/images/brands/36-colored.png",
    url: "https://www.extrememarquees.co.nz/"
  },
  {
    id: 37,
    name: "Calspan",
    image: "/images/brands/37-colored.png",
    url: "https://www.calspan.com/"
  },
  {
    id: 38,
    name: "Keizer Wheels",
    image: "/images/brands/38-colored.jpg",
    url: "https://keizerwheels.com/"
  },
  {
    id: 39,
    name: "American Muscle",
    image: "/images/brands/39-colored.jpg",
    url: "https://www.americanmuscle.com/mustangwheels.html"
  },
  {
    id: 40,
    name: "Extreme Terrain",
    image: "/images/brands/40-colored.jpg",
    url: "https://www.extremeterrain.com/wrangler-jeep-wheels.html"
  },
  {
    id: 41,
    name: "FMW Fasteners",
    image: "/images/brands/41-colored.png",
    url: "https://www.fmwfasteners.com/"
  },
  {
    id: 42,
    name: "American Trucks",
    image: "/images/brands/42-colored.jpg",
    url: "https://www.americantrucks.com/truck-bed-tonneau-covers.html"
  },
  {
    id: 43,
    name: "RefiJet",
    image: "/images/brands/43-colored.png",
    url: "https://www.refijet.com/"
  },
  {
    id: 44,
    name: "Trailer Superstore",
    image: "/images/brands/44-colored.png",
    url: "https://www.trailersuperstore.com/"
  }
];

export default brands; 