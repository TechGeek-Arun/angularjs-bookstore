var app = angular.module("bookApp", []);
app.controller('bookController', function($scope, $http) {
  $http.get("books.json").then(function (response) {
      $scope.myData = response.data;
  });

})
	
app.directive("booksDirective", function() {
    return {
	    restrict : "E",
        templateUrl : "list.html" 
    };
});

 app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    })
	app.directive("bookReview", function() {
    return {
	    restrict : "E",
        templateUrl : "review.html" 
    };
})

app.controller('ReviewController', ['$scope', function($scope) {
      
	  $scope.rating = [1,2,3,4,5];
	  $scope.master = {};
	   $scope.comment = [];

      $scope.update = function(list) {
        $scope.master = angular.copy(list);
		$scope.comment.push($scope.master);
      };
	  
	  
	
    }]);
