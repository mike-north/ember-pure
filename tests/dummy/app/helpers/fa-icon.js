import Ember from 'ember';

const { Helper } = Ember;

function fn([name]) {
  return `<i class="fa fa-${name}" aria-hidden="true"></i>`;
}

export default Helper.helper(fn);