var represent = function (tree) {
  if(!tree.leftChild.parent && !tree.rightChild.parent) {
		return '(' + tree.leftChild + tree.parent + tree.rightChild + ')';
  }
	if(tree.leftChild.parent && tree.rightChild.parent){
		return '(' + represent(tree.leftChild) + tree.parent + represent(tree.rightChild) + ')';
	}
	if(tree.leftChild.parent && !tree.rightChild.parent){
		return '(' + represent(tree.leftChild) + tree.parent + tree.rightChild + ')';
	}
	if(!tree.leftChild.parent && tree.rightChild.parent){
		return '(' + tree.leftChild + tree.parent + represent(tree.rightChild) + ')';
  }
};

module.exports = represent;
