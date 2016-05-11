import DS from 'ember-data';

import NodeModel from 'ember-osf/models/node';

export default NodeModel.extend({
    registeredFrom: DS.attr('string'),
    dateRegistered: DS.attr('string')
});
