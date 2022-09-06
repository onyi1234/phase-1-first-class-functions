function saturdayFun(activity = 'roller-skate!'){
  return(`This Saturday, I want to ${activity}!`);
}
saturdayFun('bathe my dog');

const mondayWork = function(activity = 'got to the office'){
  return(`This Monday, I will ${activity}`);
}

function wrapAdjective(visual = '*'){
  return function(adj = "special"){
      return `You are ${visual}${adj}${visual}!`
  }
}