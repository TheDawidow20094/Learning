<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <meta charset="utf-8">
    <title>Dodaj Pojazd</title>
    <link rel="stylesheet" href="./Config/style.css">

  </head>
  <body>

    <div id="kontener">

      <div style="clear:both;"></div>

        <div id="menu">
          <a href="index.php"><div class="option">Strona Główna</div></a>
          <a href="oblicz_spalanie.php"><div class="option">Oblicz Spalanie</div></a>
          <a href="baza_pojazdow.php"><div class="option">Baza Pojazdów</div></a>
          <a href="dodaj_pojazd.php"><div class="option">Dodaj Pojazd</div></a>
          <div style="clear:both"></div>
        </div>

            <div id="zawartosc">

              <h4> Proszę uzupełnić wszystkie opcje !! </h4>
              <br>
              <form action="dodaj_pojazd.php" method="post">
              Podaj markę:
              <input type="text" name="marka"> <br>
              Podaj model:
              <input type="text" name="model"> <br>
              Podaj spalanie:
              <input type="number" name="spalanie"> <br> <br>
              <input type="submit" name="przycisk" value="Prześlij do bazy">
              <br>
              <br>


              <?php

              require_once('./Config/polaczenie.php');

              if(isset($_POST["przycisk"])){
                $Marka = $_POST['marka'];
                $Model = $_POST['model'];
                $Spalanie = $_POST['spalanie'];

                $sql = ("INSERT INTO pojazdy (`marka`,`model`,`spalanie`) VALUES ('$Marka','$Model','$Spalanie')");
                $result = mysqli_query($conn, $sql);
                echo "Pomyślnie dodano pojazd do bazy: " .$Marka. "  " .$Model. " podane spalanie na 100km " .$Spalanie;
                echo " Wszystkie pojazdy możesz sprawdzić w zakładce Baza Pojazdów";
              }



              mysqli_close($conn);



               ?>
            </div>

            <div id="stopka">
            <h2> Wykonali: Dawid Kaczmarek, Jakub Jandy</h2>
            </div>
</div>

  </body>
</html>
