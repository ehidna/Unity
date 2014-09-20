//#pragma strict
//
//var enemy : GameObject;
//function Start () {
//
//}
//
//function Update () {
//	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
//    var hit : RaycastHit;
//    if(Physics.Raycast(ray,hit)){
//    	if(hit.collider.tag == "Barrack"){
//    		if(Input.GetMouseButton(0)){
//        		g = gameObject.Instantiate(enemy, transform.position, Quaternion.identity);
//        		n = g.GetComponent.<NavMeshAgent>();
//        		n.destination = targets[i].position;
//        	}
//     	}
//    }
//}