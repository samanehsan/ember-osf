import DS from 'ember-data';

import OsfModel from 'ember-osf/models/base';

export default OsfModel.extend({
    full_name: DS.attr('string'),
    given_name: DS.attr('string'),
    middle_names: DS.attr(),
    family_name: DS.attr('string'),
    suffix: DS.attr('string'),

    date_registered: DS.attr('date'),

    nodes: DS.hasMany('nodes')
});
