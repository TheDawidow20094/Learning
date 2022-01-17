<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <meta charset="utf-8">
    <title>Baza Pojazdów</title>
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


              <?php

              require_once('./Config/polaczenie.php');


              if (!$conn) {
              die("Połączenie nie udane: " . mysqli_connect_error());
              }
              echo "Lista ile spalają dane pojazdy";

              $sql = "SELECT * FROM `pojazdy`";
              $result = mysqli_query($conn, $sql);

              echo <<<TABLE
              <table>
                <tr>
                  <th>Marka</th>
                  <th>Model</th>
                  <th>Spalanie w litrach na 100km</th>
                </tr>
TABLE;

                while ($row = mysqli_fetch_assoc($result)) {
                  echo <<<ROW
                  <tr>
                    <td>$row[marka]</td>
                    <td>$row[model]</td>
                    <td>$row[spalanie]</td>
                  </tr>
ROW;
                }
                echo "</table>";

                mysqli_close($conn);

               ?>

            </div>

            <div id="stopka">
            <h2> Wykonali: Dawid Kaczmarek, Jakub Jandy</h2>
            </div>
</div>

  </body>
</html>
