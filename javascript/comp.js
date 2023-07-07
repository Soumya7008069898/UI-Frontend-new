var car=[
    {
      "image":"../images/logo.png",
      "Name" : "",
      "Power" : "",
      "Torque" : "",
      "Ground Clearance" : "",
      "Top Speed" : "",
      "Fuel Efficiency":"",
      "Range":"",
      "Fuel capacity":"",
      "Transmission":"",
      "Boot Space":"",
      "PayLoad":"",
      "WheelBase":"",
      "Height":"",
      "Width":"",
      "Length":""
    },
    {
      "image":"../images/comp1.png",
      "Name" : "Taycan",
      "Power" : "370ps",
      "Torque" : "502Nm",
      "Ground Clearance" : "135mm",
      "Top Speed" : "230km/hr",
      "Fuel Efficiency":"NA",
      "Range":"630km",
      "Fuel capacity":"Battery",
      "Transmission":"Automatic",
      "Boot Space":"530L",
      "PayLoad":"635kg",
      "WheelBase":"2900mm",
      "Height":"1394mm",
      "Width":"1966mm",
      "Length":"4963mm"
    },
    {
        "image":"../images/colorpicker21.png",
        "Name" : "911",
        "Power" : "539ps",
        "Torque" : "450Nm",
        "Ground Clearance" : "127mm",
        "Top Speed" : "315km/hr",
        "Fuel Efficiency":"6km/L",
        "Range":"460km",
        "Fuel capacity":"70L",
        "Transmission":"7-Speed PDK",
        "Boot Space":"420L",
        "PayLoad":"342kg",
        "WheelBase":"2457mm",
        "Height":"1279mm",
        "Width":"1852mm",
        "Length":"4573mm"
      },
      {
        "image":"../images/colorpicker50.png",
        "Name" : "Cayenne",
        "Power" : "340ps",
        "Torque" : "400Nm",
        "Ground Clearance" : "195mm",
        "Top Speed" : "245km/h",
        "Fuel Efficiency":"8.2km/L",
        "Range":"580km",
        "Fuel capacity":"70L",
        "Transmission":"8-speed PDK",
        "Boot Space":"705L",
        "PayLoad":"700kg",
        "WheelBase":"2895mm",
        "Height":"1696mm",
        "Width":"1983mm",
        "Length":"4940mm" 
      },
      {
        "image":"../images/colorpicker30.png",
        "Name" : "Macan",
        "Power" : "265ps",
        "Torque" : "450Nm",
        "Ground Clearance" : "185mm",
        "Top Speed" : "232km/h",
        "Fuel Efficiency":"10.7km/L",
        "Range":"500km",
        "Fuel capacity":"50L",
        "Transmission":"6-Speed PDK",
        "Boot Space":"520L",
        "PayLoad":"590kg",
        "WheelBase":"2767mm",
        "Height":"1621mm",
        "Width":"1922mm",
        "Length":"4762mm" 
      },
      {
        "image":"../images/colorpicker65.png",
        "Name" : "Panamerra",
        "Power" : "330ps",
        "Torque" : "450Nm",
        "Ground Clearance" : "135mm",
        "Top Speed" : "268km/h",
        "Fuel Efficiency":"9km/L",
        "Range":"530km",
        "Fuel capacity":"60L",
        "Transmission":"8-Speed Automatic",
        "Boot Space":"460L",
        "PayLoad":"380Kg",
        "WheelBase":"2950mm",
        "Height":"1425mm",
        "Width":"1935mm",
        "Length":"5050mm"
      },
    {
      "image":"../images/colorpicker40.png",
      "Name" : "Boxster",
      "Power" : "425ps",
      "Torque" : "410Nm",
      "Ground Clearance" : "130mm",
      "Top Speed" : "245km/h",
      "Fuel Efficiency":"9.8km/L",
      "Range":"420km",
      "Fuel capacity":"45L",
      "Transmission":"6-Speed Manual",
      "Boot Space":"380L",
      "PayLoad":"510Kg",
      "WheelBase":"2484",
      "Height":"1404mm",
      "Width":"1880mm",
      "Length":"4456"
    },
    /*{
      "image":"comp1.png",
      "Name" : "baked beans",
      "Power" : 0.40,
      "Torque" : "beans.jpg",
      "Ground Clearance" : "vegetables",
      "Top Speed" : "irjogeg",
      "Fuel Efficiency":"fef",
      "Range":"fef",
      "Fuel capacity":"fef",
      "Transmission":"fef",
      "Boot Space":"fef",
      "PayLoad":"fef",
      "WheelBase":"fef",
      "Height":"fef",
      "Width":"fef",
      "Length":"fef"
    }*/
  ]

for (var i = 1; i < car.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${car[i].Name}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${car[i].Name}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = car[a].image
        document.getElementById("power1").innerHTML =car[a].Power
        document.getElementById("tor1").innerHTML = car[a].Torque
        document.getElementById("gc1").innerHTML = car[a]["Ground Clearance"]
        document.getElementById("ts1").innerHTML = car[a]["Top Speed"]
        document.getElementById("fe1").innerHTML = car[a]["Fuel Efficiency"]
        document.getElementById("range1").innerHTML = car[a].Range
        document.getElementById("fc1").innerHTML = car[a]["Fuel capacity"]
        document.getElementById("tran1").innerHTML = car[a].Transmission
        document.getElementById("bs1").innerHTML = car[a]["Boot Space"]
        document.getElementById("pay1").innerHTML = car[a].PayLoad
        document.getElementById("wb1").innerHTML = car[a].WheelBase
        document.getElementById("height1").innerHTML = car[a].Height
        document.getElementById("width1").innerHTML = car[a].Width
        document.getElementById("length1").innerHTML = car[a].Length
        // document.getElementById("weight1").innerHTML = car[a].brand

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = car[0].image
        document.getElementById("power1").innerHTML = ""
        document.getElementById("tor1").innerHTML = ""
        document.getElementById("gc1").innerHTML = ""
        document.getElementById("ts1").innerHTML = ""
        document.getElementById("fe1").innerHTML = ""
        document.getElementById("range1").innerHTML = ""
        document.getElementById("fc1").innerHTML = ""
        document.getElementById("tran1").innerHTML = ""
        document.getElementById("bs1").innerHTML = ""
        document.getElementById("pay1").innerHTML = ""
        document.getElementById("wb1").innerHTML = ""
        document.getElementById("height1").innerHTML = ""
        document.getElementById("width1").innerHTML = ""
        document.getElementById("length1").innerHTML = ""
        // document.getElementById("weight1").innerHTML = ""
    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = car[a].image
        document.getElementById("power2").innerHTML =car[a].Power
        document.getElementById("tor2").innerHTML = car[a].Torque
        document.getElementById("gc2").innerHTML = car[a]["Ground Clearance"]
        document.getElementById("ts2").innerHTML = car[a]["Top Speed"]
        document.getElementById("fe2").innerHTML = car[a]["Fuel Efficiency"]
        document.getElementById("range2").innerHTML = car[a].Range
        document.getElementById("fc2").innerHTML = car[a]["Fuel capacity"]
        document.getElementById("tran2").innerHTML = car[a].Transmission
        document.getElementById("bs2").innerHTML = car[a]["Boot Space"]
        document.getElementById("pay2").innerHTML = car[a].PayLoad
        document.getElementById("wb2").innerHTML = car[a].WheelBase
        document.getElementById("height2").innerHTML = car[a].Height
        document.getElementById("width2").innerHTML = car[a].Width
        document.getElementById("length2").innerHTML = car[a].Length
        // document.getElementById("weight1").innerHTML = ""
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = car[0].image
        document.getElementById("power2").innerHTML =""
        document.getElementById("tor2").innerHTML = ""
        document.getElementById("gc2").innerHTML = ""
        document.getElementById("ts2").innerHTML = ""
        document.getElementById("fe2").innerHTML = ""
        document.getElementById("range2").innerHTML = ""
        document.getElementById("fc2").innerHTML = ""
        document.getElementById("tran2").innerHTML = ""
        document.getElementById("bs2").innerHTML = ""
        document.getElementById("pay2").innerHTML = ""
        document.getElementById("wb2").innerHTML = ""
        document.getElementById("height2").innerHTML = ""
        document.getElementById("width2").innerHTML = ""
        document.getElementById("length2").innerHTML = ""
        // document.getElementById("weight1").innerHTML = ""
    }
}