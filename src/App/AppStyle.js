export default{
    App : {
        display: 'flex',
        height: '100%'
    },
    site_container : {
        paddingTop: 65,
        display: 'flex',
        justifyContent: 'center',
        transition: 'margin 0.5s ease-in-out'
    },
    site_container_small: {
        marginLeft: 300
    },
    centerpiece: {
        flexGrow: 5,
        textAlign: 'center',
        width: 'auto'
    }


}

/*
theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    drawer bool auf app.js hochziehen
    echtes css für app.js auf style.js umstellen (wie überall sonst)
 */
