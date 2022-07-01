let coordinates={

}
$(document).ready(function(){
    get_coordinates()
})

function get_coordinates(){
    let search_params = new URLSearchParams(window.location.search)

    if(search_params.has('source')&&search_params.has('destination')){
        let source = search_params.get('source')
        let destination = search_params.get('destination')

        coordinates.source_lat = source.split(';')[0]
        coordinates.source_lng = source.split(";")[1];

        coordinates.destination_lat = destination.split(";")[0];
        coordinates.destination_lng = destination.split(";")[1];
    }else{
        alert('Coordinates not Selected!...')
        window.history.back()
    }
}