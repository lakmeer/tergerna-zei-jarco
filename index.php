<?php
function line ($a, $b, $c) { ?>
  <table>
    <tr><td class="lojbo"> <?= $a ?> </td></tr>
    <tr><td class="smuni"> <?= $b ?> </td></tr>
    <tr><td class="fanva"> <?= $c ?> </td></tr>
  </table>
<?php }

function section ($a) { ?>
  <h3> <?= $a ?> </h3>
<?php }

?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>lojbo fanva jarco</title>
  <style>
    * { box-sizing: border-box; }
    html, body { font-family: "Palatino"; }
    table { margin-bottom: 1em; }
    .lojbo { color: orange; }
    .smuni { color: royalblue; }
    .fanva { color: black; }
  </style>
</head>
<body>
  <h1> BALNEMA </h1>
  <h2> Djemynai - ZA'O </h2>
<?php

section('Title');

line(
  'balnema',
  'baleen whale',
  'Whale');

section('Verse 1');

line(
  ".i ro xamsi cu voi su boxna ki pagbu",
  "every ocean is ([it] is composed of at least some waves)",
  "Every ocean is composed of some waves");

line(
  ".i je ro rictu'a cu voi su tricu ki xabju",
  "additionally, every forest is ([it] is the habitat of at least some trees)",
  "And every forest is home to some trees");

line(
  ".i ro rirxe cu voi ki su krasi cu cliva",
  "every river is ([it] leaves at least some origin)",
  "Every river leaves it's source");

line(
  ".i je mi voi ki senva lo se djica",
  "and I am ([it] dreams of desired things)",
  "And here's me, dreaming my dreams");

section('Hook');

line(
  ".i mi senva lo nu ze'a lo djedi cu balnema",
  "I am dreaming that for a while the day is a baleen whale",
  "I dream that for a day I am a whale");

line(
  ".i kansa lo drata xabju be lo xamsi",
  "[zo'e] accompanies a different habitat which is the ocean",
  "Accompanied only by my alternate home, the ocean");

line(
  ".i lifri tau lo manku noi se manci",
  "[zo'e] experiences something about the dark, which is awe-inpsiring",
  "Experiencing the awesome darkness");

section('Verse 2');

line(
  ".i lo xamsi cu manku je cu simlu lo ka cimni ro cimde",
  "The ocean is dark and is seems to have the property of [it] is infinite in all dimensions",
  "The ocean is dark and appears infinite in every directions");

line(
  ".i simlu lo ka no da ce jimte",
  "[zo'e] seems to have the property that there is no X such that X is a boundary of [it]",
  "It appears to have no boundary.");

line(
  ".i lo xamsi cu lenku je cu zdani lo zanvrici",
  "The ocean is cold and is the home of various awesome things",
  "The ocean is cold and is home to wonderous things");

line(
  "noi ki lo ka prane zifre ka'e lifri",
  "which [it] can experince the property of perfect freedom",
  "That are perfectly free here to be able to experience");

?>
</body>
</html>
