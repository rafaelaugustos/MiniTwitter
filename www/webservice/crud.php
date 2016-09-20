<?php

require("config.php");

function read($table, $campos = null, $where = null, $order = null){
	global $pdo;
	$select = 'SELECT ';
	if(is_array($campos)){
		$imp = implode(', ', $campos);
		$select .= $imp;
	}elseif(is_null($campos)){
		$select .= " * ";
	}

	$select .= ' FROM '.$table.'';
	if(!is_null($where)){
		$select .= " WHERE $where";
	}

	if(!is_null($order)){
		$select .= " ORDER BY $order";
	}

	$sql = $pdo->prepare($select);
	$sql->execute();

	return $sql;
}