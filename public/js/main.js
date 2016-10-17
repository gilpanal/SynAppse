var app = {


    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    registerEvents: function() {
        $(window).on('hashchange', $.proxy(this.route, this));
        $('#users-article').on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('#users-article').on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
       
    },

    route: function() {
        var hash = window.location.hash;
        if (!hash) {
            $('#users-article').html(new HomeView(this.store).render().el);
            
            //return;
        }
        var match = hash.match(app.detailsURL);
        if (match) {
            this.store.findById(Number(match[1]), function(employee) {
                $('#users-article').html(new EmployeeView(employee).render().el);
            });
        }
    },

    initialize: function() {
        var self = this;
        this.detailsURL = /^#employees\/(\d{1,})/;
        this.registerEvents();
        this.store = new MemoryStore(function() {
            self.route();
        });
    }

};

app.initialize();
