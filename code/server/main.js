import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Houston.add_collection(Houston._admins);
  Houston.add_collection(Meteor.users);
});

Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    Candidates.remove({});

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ];
        
//      let exists = Candidates.findOne( { 'Last Name': item['Last Name'] } );
      // should 'saleId' get changed to 'First Name'? also...is 'First Name' valid name...or should it have an underscore or something 'First_Name' which would also mean changing the columns in the file.bél.
      // I
      
      
      if ( item['Last Name'] ) {    // If there is a last name, then this is considered to be valid candidate data 
        Candidates.insert( item );
      } else {
        console.warn( 'Rejected. This item is likely not valid candidate data.' );
      }
      
      
    }
  }
});
