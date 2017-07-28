app.controller('MainController', ['$scope', function ($scope) {
	var database = [
		{
			team: 'Engineering',
			employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']
		}, {
			team: 'Executive',
			employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']
		}, {
			team: 'Finance',
			employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']
		}, {
			team: 'Sales',
			employees: ['Ankit Jain', 'Anjali Maulingkar']
		}
	];
	var employees = [], teams = [];
	$scope.teams = teams = database.map(function(a) {
		return a.team;
	});
	$scope.onTeamSelect = function (index) {
		$scope.employees = employees = database[index].employees;
		document.getElementById('textTeam').value = $scope.teams[index];
		document.getElementById('dropdown-team').style.display = 'none';
	};

	$scope.onEmployeeSelect = function (index) {
		document.getElementById('textEmployee').value = $scope.employees[index];
		document.getElementById('dropdown-employee').style.display = 'none';
	};

	$scope.onTeamExpand = function () {
		if (document.getElementById('dropdown-team').style.display === 'none' ||
			document.getElementById('dropdown-team').style.display === '') {
			document.getElementById('dropdown-team').style.display = 'inline-block';
		} else if (document.getElementById('dropdown-team').style.display === 'inline-block') {
			document.getElementById('dropdown-team').style.display = 'none';
		}
	};
	$scope.onEmployeeExpand = function () {
		if (document.getElementById('dropdown-employee').style.display === 'none' ||
			document.getElementById('dropdown-employee').style.display === '') {
			document.getElementById('dropdown-employee').style.display = 'inline-block';
		} else if (document.getElementById('dropdown-employee').style.display === 'inline-block') {
			document.getElementById('dropdown-employee').style.display = 'none';
		}
	};

	$scope.onTeamChange = function () {
		var teamList = database.map(function(a) {return a.team;});
		var text = document.getElementById('textTeam').value;
		$scope.teams = stringMatch(teamList, text);
		document.getElementById('dropdown-team').style.display = 'inline-block';
	};
	$scope.onEmployeeChange = function () {
		var employeeList = employees.slice();
		var text = document.getElementById('textEmployee').value;
		$scope.employees = stringMatch(employeeList, text);
		document.getElementById('dropdown-employee').style.display = 'inline-block';
	};
	$scope.dialogHide = function () {
		var team = document.getElementById('textTeam').value,
			employee = document.getElementById('textEmployee').value;

		console.log(team,'\n' ,employee);

		if (team == '' && employee == '') {
			document.getElementById('dialogAuto').style.display = 'none';
		} else if (confirm('You have changes in the form')) {
			document.getElementById('dialogAuto').style.display = 'none';
		}
	}

	$scope.dialogSubmit = function () {
		var team = document.getElementById('textTeam').value,
			employee = document.getElementById('textEmployee').value;

		if (team == '' && employee == '') {
			document.getElementById('dialogAuto').style.display = 'none';
			return;
		}

		if (teams.indexOf(team) !== -1 && employees.indexOf(employee) !== -1) {
			console.log('Team:' + team);
			console.log('Employee:' + employee);
			
			document.getElementById('dialogAuto').style.display = 'none';
		} else {
			alert('Wrong inputs');
		}
	}

	function stringMatch (array, text) {
		var result = [],
			str,
			i = 0,
			j = 0;
		for (; i < array.length; i++) {
			str = array[i];
			if ((str.toLowerCase()).includes(text.toLowerCase())) {
				result.push(str);
			}
		}
		return result;
	}

}]);