function getRestaurantData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', restaurant_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the restaurant records into our restaurant array        
	restaurant_array = JSON.parse(request.responseText);
    fetchComments();
    fetchUsers();        
	console.log(restaurant_array) // output to console        
	displayRestaurants();
};    

//This command starts the calling of the restaurant web api    
request.send();}

function displayRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
            var picture = restaurant_array[count].picture;
            var name = restaurant_array[count].name;
	var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + picture + '" alt="Card image cap">\
                <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showRestaurantComments(this)"></i>\
                <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + name + '</h5></div>\
				</div>'
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }

//This function is to display the individual restaurant details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("name").textContent = restaurant_array[item].name;
    document.getElementById("cuisine").textContent = restaurant_array[item].cuisine;
    document.getElementById("location").textContent = restaurant_array[item].location;
    document.getElementById("type").textContent = restaurant_array[item].type;
    document.getElementById("pricing").textContent = restaurant_array[item].pricing;
    document.getElementById("picture").src = restaurant_array[item].picture;
    document.getElementById("restaurant_email_address").textContent = restaurant_array[item].restaurant_email_address;
    document.getElementById("restaurant_mobile_number").textContent = restaurant_array[item].restaurant_mobile_number;
    document.getElementById("website").textContent = restaurant_array[item].website;
    document.getElementById("about").textContent = restaurant_array[item].about;
    document.getElementById("opening_hours").textContent = restaurant_array[item].opening_hours;
}

function searchRestaurant(){

    var searchTerm = document.getElementById("searchBar").value;
    console.log("searchTerm: "+ searchTerm);

    // if no search input, display all restaurants
    if (searchTerm.length == 0){
        getRestaurantData();
    }
    var searchbar = new XMLHttpRequest();
    searchbar.open("POST", "/Searchrestaurants", true);
    searchbar.setRequestHeader("Content-Type", "application/json");
    searchbar.onload = function () {
        //display searched restaurants
        restaurant_array = JSON.parse(searchbar.responseText);
        console.log("search successful");
        displayRestaurants();
    }
    searchbar.send(JSON.stringify({search:searchTerm}))
        
}