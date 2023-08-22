var urn = "undefined" != typeof dataLayer ? dataLayer[0].G5_CLIENT_ID : G5Header.dashboard_notifications_view_url.match(/https:\/\/g5marketingcloud.com\/notifications\/(.*)/)[1];
window.open("https://hub.g5marketingcloud.com/admin/clients/" + urn);
