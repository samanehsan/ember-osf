import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('index', {
        path: '/'
    });
    this.route('nodes', function() {
        this.route('detail', {
            path: '/:node_id'
        }, function() {
            this.route('files');
        });
    });
    this.route('login');
    this.route('institutions', function() {
        this.route('detail', {
            path: '/:institution_id'
        });
    });
    this.route('registrations', function() {
        this.route('detail', {
            path: '/:registration_id'
        });
    });
    this.route('file', {
        path: '/file/:file_id'
    });
});

export default Router;
