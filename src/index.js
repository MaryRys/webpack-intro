import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('#clickBtn').on('click', () => {
  $('#important-text').append('<p>Hello World!</p>');
});
