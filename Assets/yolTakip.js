#pragma strict
private var currentTarget : Transform;
public var targets : Transform[];
//public var navigation : NavMeshAgent;
public var enemy : GameObject;
private var i : int = 0;
private var g : GameObject;
private var n : NavMeshAgent=null;
//var g = gameObject.Instantiate(enemy, transform.position, Quaternion.identity);
//var n = g.GetComponent.<NavMeshAgent>();
//n.destination = destination.position;
function Start () {
}
function Update () {

	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    var hit : RaycastHit;
    if(Physics.Raycast(ray,hit)){
    	if(hit.collider.tag == "Barack"){
    		if(Input.GetMouseButtonDown(0)){
        		g = gameObject.Instantiate(enemy, transform.position, Quaternion.identity);
        		n = g.GetComponent.<NavMeshAgent>();
        		n.destination = targets[0].position;
        	}
     	}
    }
    deneme();
}
function deneme(){
var dist = Vector3.Distance(targets[i].position, n.transform.position);
    currentTarget = targets[i];
    Debug.Log(n.transform.position);
    Debug.Log(g.transform.position);
    //if npc reaches its destination (or gets close)...
    Debug.Log(dist);
    if (dist < 5){      
    	if (i < targets.Length-1){ //negate targets[0], since it's already set in destination.
        	i++; //change next target
          	n.destination = targets[i].position; //go to next target by setting it as the new destination
        }
    }
}