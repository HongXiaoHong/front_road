$(document).ready(function () {
    $("#music_magnetic_field_form").on('submit', function (event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        var musicUrl = $("#music_url").val();
        var directory = $("#directory").val();

        $.ajax({
            url: 'http://localhost:8888/music/magnetic/field/download',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                url: musicUrl,
                directory: directory
            }),
            success: function (response) {
                console.log(response);
                // 在这里处理服务器返回的响应
                if ("success" == response.result) {
                    Swal.fire({
                        icon: 'success',
                        title: 'success',
                        text: `${response.song_name}-${response.artist_name} download success`
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${response.track}`
                    })
                }
            },
            error: function (error) {
                console.log(error);
                // 在这里处理错误
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`
                })
            }
        });
    });
});

