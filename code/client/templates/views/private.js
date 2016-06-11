import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.private.onCreated( () => {
  Template.instance().uploading = new ReactiveVar( false );
});

Template.private.helpers({
  uploading() {
    return Template.instance().uploading.get();
  },
  site() {
    return Sites.find();
  }
});

Template.private.events({
  'change [name="uploadCSV"]' ( event, template ) {

    Bert.alert( 'Upload started...', 'success', 'growl-top-right' );

    Papa.parse( event.target.files[0], {
      header: true,
      complete( results, file ) {
        Meteor.call( 'parseUpload', results.data, ( error, response ) => {
          if ( error ) {
            console.log( error.reason );
          } else {
            
            template.uploading.set( false );
            Bert.alert( 'Upload complete!', 'success', 'growl-top-right' );
          }
        });
      }
    });
  }
});