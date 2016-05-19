class Ajax {
    constructor () {
        this.url = "http://mhdapi.37.com/?c=datatest&a=get_and_set&alias_info=datatest&f=201603&alias=2"
    }
    get ( callback ) {
        $.ajax({
            url: this.url,
            data: {
                type: "get"
            },
            dataType: "jsonp"
        }).done(function( res ) {
            callback( res.list );
        });
    }
    set ( data, callback ) {
        $.ajax({
            url: this.url,
            data: {
                type: "set",
                data: JSON.stringify( data )
            },
            dataType: "jsonp"
        }).done(function( res ) {
            callback( res.list );
        });
    }
}

export default new Ajax();