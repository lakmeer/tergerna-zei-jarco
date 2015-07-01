
# Simple Bridi

export example =
  selbri:
    text: "dunda"
    pre: "co\'a"
    args:
      fa: sumti: text: "mi"
      fe: sumti: text: "lo se dunda"
      fi: explicit: yes, sumti: text: "do"


# Balnema Chorus

export balnema =

  # .i mi senva lo nu ze'a lo djedi cu balnema
  * selbri:
      text: 'senva'
      args:
        fa:
          sumti:
            type: \object
            text: 'mi'
        fe:
          sumti:
            type: \event
            text: 'lo nu'
            bridi:
              selbri:
                text: 'balnema'
                args:
                  fa:
                    sumti:
                      type: \object
                      text: 'lo djedi'

  # .i kansa lo drata xabju be lo xamsi
  * selbri:
      text: 'kansa'
      args:
        fe:
          sumti:
            type: \object
            text: 'lo'
            bridi:
              selbri:
                text: 'drata xabju'
                args:
                  'be fe':
                    sumti:
                      type: \object
                      text: 'lo xamsi'

  # .i lifri tau lo manku noi se manci
  * selbri:
      text: 'lifri'
      args:
        fa:
          sumti:
            type: \object
            text: 'mi'
        fe:
          sumti:
            type: \event
            text: 'lo nu'
            bridi:
              selbri:
                text: 'balnema'
                args:
                  fa:
                    ui: 'ui'
                    sumti:
                      text: 'lo djedi'
                      type: \object


/*
.i ro xamsi cu voi su boxna ki pagbu
.i je ro rictu'a cu voi su tricu ki xabju
.i ro rirxe cu voi ki su krasi cu cliva
.i je mi voi ki senva lo se djica

.i lo xamsi cu manku je cu simlu lo ka cimni ro cimde
.i simlu lo ka no da ce jimte
.i lo xamsi cu lenku je cu zdani lo zanvrici
noi ki lo ka prane zifre bu'u ka'e lifri
*/
