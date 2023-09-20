<!DOCTYPE html>
<html>
<head>
    <title>Zaman Hesaplama</title>
</head>
<body>
    <h1>Zaman Hesaplama</h1>
    <p id="result"></p>

    <script>
        // Sayfa yüklendiğinde otomatik olarak hesaplamayı yapacak fonksiyon
        window.onload = function() {
            const startDate = new Date("2020-12-18"); // Başlangıç tarihi
            const currentDate = new Date(); // Şu anki tarih

            const timeDifference = currentDate - startDate;
            const millisecondsInADay = 1000 * 60 * 60 * 24;
            const daysDifference = Math.floor(timeDifference / millisecondsInADay);

            document.getElementById("result").innerHTML = `18 Aralık 2020'den bu yana ${daysDifference} gün geçti.`;
        };
    </script>
</body>
</html>
