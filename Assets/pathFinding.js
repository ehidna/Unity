#pragma strict

var interval : float = 3.0f;
var timeLeft : float = 0.0f;
var enemy : GameObject;
var destination : Transform = null;
function Update(){
	timeLeft -= Time.deltaTime;
	if(timeLeft <= 0.0f){
		var g = gameObject.Instantiate(enemy, transform.position, Quaternion.identity);
		var n = g.GetComponent.<NavMeshAgent>();
		n.destination = destination.position;
		timeLeft = interval;
	}

}
