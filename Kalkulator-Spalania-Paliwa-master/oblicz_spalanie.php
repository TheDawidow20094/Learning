<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <meta charset="utf-8">
    <title>Oblicz Spalanie</title>
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

              <h3> Opcja 1: Oblicz Spalanie przy użyciu formularza </h3>
              <br>
              <h4> Kalkulator kosztu przejechania trasy: </h4>
              <br>
              <br>

              <form action="oblicz_spalanie.php" method="post">
              Podaj długość planowanej trasy:
              <input type="number" name="trasa"> <br>
              Podaj średnie spalanie:
              <input type="number" name="spalanie"> <br>
              Podaj cene za litr paliwa:
              <input type="number" name="cena"> <br> <br>
              <input type="submit" name="przycisk" value="Oblicz">
              <br>

              <h4> Kalkulator średniego spalania na 100km </h4>
              <form action="oblicz_spalanie.php" method="post">
              Podaj spalone paliwo w litrach:
              <input type="number" name="spalone_paliwo"> <br>
              Podaj ilość przejechanych kilometrów:
              <input type="number" name="ilosc_km"> <br>
              Podaj cene litra paliwa (Opcjonalnie)
              <input type="number" name="cena_opcjonalna"> <br> <br>
              <input type="submit" name="przycisk_dwa" value="Oblicz">

              <br>
              <br>
              <?php

              if(isset($_POST["przycisk"])){
                $trasa = $_POST['trasa'];
                $spalanie = $_POST['spalanie'];
                $cena = $_POST['cena'];
                $wynik = ($trasa*$spalanie/100) * $cena;

                echo "Cena przejechania " .$trasa. " km wynosi: " .$wynik. " zł";

              }

              if(isset($_POST["przycisk_dwa"])){
                $spalone_paliwo = $_POST['spalone_paliwo'];
                $przejechane_km = $_POST['ilosc_km'];
                $cena_opcjonalna = $_POST['cena_opcjonalna'];

                if($cena_opcjonalna != 0)
                {
                  $wynik = ($spalone_paliwo/$przejechane_km) * 100;
                  $wynik_koncowy = $wynik * $cena_opcjonalna;
                  echo "Spalanie wynosi " .$wynik. " litrów na 100km ";
                  echo " Koszt: " .$wynik_koncowy;

                }
                else
                {
                  $wynik = ($spalone_paliwo/$przejechane_km) * 100;
                  echo "Spalanie wynosi " .$wynik. " litrów na 100km ";
                }
              }


               ?>

               <!--  <h3> Opcja 2: Oblicz Spalanie przy użyciu listy pojazdów </h3>
               <form action="oblicz_spalanie.php" method="post">
               Podaj długość planowanej trasy:
               <input type="number" name="planowana_trasa_db"> <br>
               Wybierz Pojazd z listy: -->

               <?php
              // require_once('./Config/polaczenie.php');






               ?>
            </div>

            <div id="stopka">
            <h2> Wykonali: Dawid Kaczmarek, Jakub Jandy</h2>
            </div>
</div>

  </body>
</html>
