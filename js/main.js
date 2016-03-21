$(document).ready
(
    function()
    {
        $('#multiscroll').multiscroll
        (
            {
                anchors: ['about', 'works', 'contact'],
                menu: '#headerMenu'
            }
        );
    }
);
