// Dummy data for artwork
const paintings = [
  {
    "id": 1,
    "title": "Μάγια",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_0.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 2,
    "title": "Μοναξιά, 1992",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_1.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 3,
    "title": "Μάγια, 1982",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_2.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 4,
    "title": "Βρεφοκρατούσα",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_3.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 5,
    "title": "Αυτοπροσωπογραφία, 1988",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_4.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 6,
    "title": "Η Γυναίκα με το Λουλούδι",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_5.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 7,
    "title": "Λουόμενη, 1989",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_6.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 8,
    "title": "Εκπεσσών, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_7.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 9,
    "title": "Γυμνό, 1976",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_8.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 10,
    "title": "Ιανός, 1990 (μελάνι σουπιάς)",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_9.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 11,
    "title": "Αναμνηστικό, 1984",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_10.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 12,
    "title": "Πρόσωπο, 1988",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_11.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 13,
    "title": "Χρυσάνθη, 1981",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_12.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 14,
    "title": "Σκιά στην Άμμο, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_13.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 15,
    "title": "Μάγια και Σπήλιος, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_14.jpg",
    "year": "2000",
    "subTag": "Πορτραίτα"
  },
  {
    "id": 16,
    "title": "Βυθός, 2007",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_15.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 17,
    "title": "Ουράνιοι Σπόνδυλοι",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_16.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 18,
    "title": "Έξαψη, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_17.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 19,
    "title": "Νεφέλες, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_18.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 20,
    "title": "Παραλίμνιο Τοπίο",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_19.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 21,
    "title": "Εκλάμψεις, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_20.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 22,
    "title": "Έκρηξη, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_21.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 23,
    "title": "Θάλασσα",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_22.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 24,
    "title": "Κυμματοθραύστης, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_23.jpg",
    "year": "2000",
    "subTag": "Συμπαντικά Τοπία"
  },
  {
    "id": 25,
    "title": "Κρανίου Τόπος, 1999",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_24.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 26,
    "title": "Η Πτώση της Αθωότητας",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_25.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 27,
    "title": "Ηλιακό Πλέγμα-Γυναίκα",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_26.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 28,
    "title": "Τοπίο Κορμού",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_27.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 29,
    "title": "Αρχέγονο",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_28.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 30,
    "title": "Ποσειδώνας, 2004",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_29.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 31,
    "title": "Ποσειδώνας (Β&#039; Εκδοχή), 2021",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_30.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 32,
    "title": "Κάθαρση, 1990",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_31.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 33,
    "title": "Άγγελος Eξ&#039; Ουρανού, 1996",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_32.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 34,
    "title": "Άτιτλο 5",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_33.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 35,
    "title": "Μελωδία των Υδάτων, 1993",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_34.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 36,
    "title": "Τομή",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_35.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 37,
    "title": "Κρυφό Κοίταγμα",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_36.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 38,
    "title": "Κρυψίνους, 1990",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_37.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 39,
    "title": "Ιππέας, 1989",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_38.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 40,
    "title": "Πολεμιστής, 1992",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_39.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 41,
    "title": "Άτιτλο 1",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_40.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 42,
    "title": "Άτιτλο, 1988",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_41.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 43,
    "title": "Άτιτλο 6",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_42.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 44,
    "title": "Άτιτλο 2",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_43.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 45,
    "title": "Άτιτλο 3",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_44.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 46,
    "title": "Άτιτλο 11",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_45.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 47,
    "title": "Ο Άγγελος των Υδάτων, 2003",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_46.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 48,
    "title": "Άτιτλο 7",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_47.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 49,
    "title": "Άτιτλο 4",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_48.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 50,
    "title": "Σαρκοφάγος",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_49.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 51,
    "title": "Συνομιλία Σπονδύλων, 1996",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_50.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 52,
    "title": "Συνομιλία, 1998",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_51.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 53,
    "title": "Αποχωρισμός, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_52.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 54,
    "title": "Νοσταλγικόν, 1982",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_53.jpg",
    "year": "2000",
    "subTag": "Συνθέσεις"
  },
  {
    "id": 55,
    "title": "Μαγδαληνή, 2003",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_54.jpg",
    "year": "2000",
    "subTag": "Άτιτλα"
  },
  {
    "id": 56,
    "title": "11η Σεπτεμβρίου, 2018",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_55.jpg",
    "year": "2000",
    "subTag": "Άτιτλα"
  },
  {
    "id": 57,
    "title": "Άτιτλο, 1995",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_56.jpg",
    "year": "2000",
    "subTag": "Άτιτλα"
  },
  {
    "id": 58,
    "title": "Το Χέρι, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_57.jpg",
    "year": "2000",
    "subTag": "Άτιτλα"
  },
  {
    "id": 59,
    "title": "Τοπογράφημα, 1992",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_58.jpg",
    "year": "2000",
    "subTag": "Άτιτλα"
  },
  {
    "id": 60,
    "title": "Σαρκοφάγος",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_59.jpg",
    "year": "2000",
    "subTag": "Άτιτλα"
  },
  {
    "id": 61,
    "title": "Εγκλωβισμός, 1991",
    "tag": "Λυρικά",
    "category": "painting",
    "image": "/images/painting_60.jpg",
    "year": "2000",
    "subTag": "Άτιτλα"
  },
  {
    "id": 62,
    "title": "Ορφέας, 1987",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_61.jpg",
    "year": "2000"
  },
  {
    "id": 63,
    "title": "Αρχέτυπο",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_62.jpg",
    "year": "2000"
  },
  {
    "id": 64,
    "title": "Γέννηση",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_63.jpg",
    "year": "2000"
  },
  {
    "id": 65,
    "title": "Πολεμιστές, 1992",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_64.jpg",
    "year": "2000"
  },
  {
    "id": 66,
    "title": "Οικογένεια-Ανάσταση, 1988",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_65.jpg",
    "year": "2000"
  },
  {
    "id": 67,
    "title": "Γυναίκα-Πουλί, 1985",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_66.jpg",
    "year": "2000"
  },
  {
    "id": 68,
    "title": "Προσωπογραφία Μάγιας, 1988",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_67.jpg",
    "year": "2000"
  },
  {
    "id": 69,
    "title": "Εξωγήινος, 1992",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_68.jpg",
    "year": "2000"
  },
  {
    "id": 70,
    "title": "Βρέφος-Μάγια",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_69.jpg",
    "year": "2000"
  },
  {
    "id": 71,
    "title": "Σύλληψη, 1990",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_70.jpg",
    "year": "2000"
  },
  {
    "id": 72,
    "title": "Άτιτλο82, 1991",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_71.jpg",
    "year": "2000"
  },
  {
    "id": 73,
    "title": "Φιλαυτία",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_72.jpg",
    "year": "2000"
  },
  {
    "id": 74,
    "title": "Αναπόληση, 1992",
    "tag": "Γεωμετρικός Κυβισμός",
    "category": "painting",
    "image": "/images/painting_73.jpg",
    "year": "2000"
  },
  {
    "id": 75,
    "title": "Μάνα του Κόσμου (Βραβευμένο από την ΟΥΝΕΣΚΟ), 2003",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_74.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 76,
    "title": "Μνήμες Πολέμου",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_75.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 77,
    "title": "Μάνες Πολέμου",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_76.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 78,
    "title": "Μνήμες, 1991",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_77.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 79,
    "title": "Κραυγή Πολέμου-Μάνα, 1991",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_78.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 80,
    "title": "Μνήμες (Κυψέλη)",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_79.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 81,
    "title": "Μελισσοκόμος",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_80.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 82,
    "title": "Ευρίκλεια",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_81.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 83,
    "title": "Λουλούδι",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_82.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 84,
    "title": "Μνήμες, 2000",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_83.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 85,
    "title": "Μνήμες 2002",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_84.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 86,
    "title": "Μνήμες, 1998",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_85.jpg",
    "year": "2000",
    "subTag": "Μνήμες – Μάνες του κόσμου"
  },
  {
    "id": 87,
    "title": "Πηνελόπη-Αργαλειός, 2003",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_86.jpg",
    "year": "2000",
    "subTag": "Οδύσσεια"
  },
  {
    "id": 88,
    "title": "Το Όνειρο της Πηνελόπης, 2004",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_87.jpg",
    "year": "2000",
    "subTag": "Οδύσσεια"
  },
  {
    "id": 89,
    "title": "Ανθάνθρωποι, 2004",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_88.jpg",
    "year": "2000",
    "subTag": "Οδύσσεια"
  },
  {
    "id": 90,
    "title": "Μάντης Κάλχας και Οδυσσέας, 2003",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_89.jpg",
    "year": "2000",
    "subTag": "Οδύσσεια"
  },
  {
    "id": 91,
    "title": "Η Σχεδία του Οδυσσέα, 2003",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_90.jpg",
    "year": "2000",
    "subTag": "Οδύσσεια"
  },
  {
    "id": 92,
    "title": "Σταύρωσις, 1973",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_91.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  },
  {
    "id": 93,
    "title": "Πόλεμος του Κόλπου (Ιράκ), 2003",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_92.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  },
  {
    "id": 94,
    "title": "Ολυμπιακή Φλόγα",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_93.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  },
  {
    "id": 95,
    "title": "Προς τη Δόξα, 2003",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_94.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  },
  {
    "id": 96,
    "title": "Οικογένεια, 2002",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_95.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  },
  {
    "id": 97,
    "title": "Βλέμμα, 1986 (κυψέλη σε ξύλο καρυδιάς)",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_96.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  },
  {
    "id": 98,
    "title": "Ορφέας Κοιμώμενος, 2002",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_97.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  },
  {
    "id": 99,
    "title": "Μπαλαρίνα, 2001",
    "tag": "Μεικτή Τεχνική",
    "category": "painting",
    "image": "/images/painting_98.jpg",
    "year": "2000",
    "subTag": "Διάφορα"
  }
];

const sculptures = [
  {
    "id": 1,
    "title": "Χορεύτρια, 2000",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_0.jpg",
    "year": "2000"
  },
  {
    "id": 2,
    "title": "Αγαμέμνων",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_1.jpg",
    "year": "2000"
  },
  {
    "id": 3,
    "title": "Γυναίκα-Θηρίο",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_2.jpg",
    "year": "2000"
  },
  {
    "id": 4,
    "title": "Γυναίκα-Θηρίο (πίσω όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_3.jpg",
    "year": "2000"
  },
  {
    "id": 5,
    "title": "Διάς/Ταύρος &amp;amp; Ευρώπη- Δίας/Ταύρος, 2004 (μπροστά όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_4.jpg",
    "year": "2000"
  },
  {
    "id": 6,
    "title": "Διάς/Ταύρος &amp;amp; Ευρώπη- Ευρώπη, 2004 (πίσω όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_5.jpg",
    "year": "2000"
  },
  {
    "id": 7,
    "title": "Ευρώπη και Σπήλιος, Νέα Μάκρη",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_6.jpg",
    "year": "2000"
  },
  {
    "id": 8,
    "title": "Αθηνά Γλαυξ- Εκπεσούσα Βασίλισσα",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_7.jpg",
    "year": "2000"
  },
  {
    "id": 9,
    "title": "Έλλογο &amp;amp; Άλογο- Σωκράτης (μπροστά όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_8.jpg",
    "year": "2000"
  },
  {
    "id": 10,
    "title": "Έλλογο &amp;amp; Άλογο- Άλογο (πίσω όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_9.jpg",
    "year": "2000"
  },
  {
    "id": 11,
    "title": "Αρχέτυπο",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_10.jpg",
    "year": "2000"
  },
  {
    "id": 12,
    "title": "Η Νίκη της Σαμοθράκης, 2003",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_11.jpg",
    "year": "2000"
  },
  {
    "id": 13,
    "title": "Σκύλλα &amp;amp; Χάρυβδη- Σκύλλα (μπροστά όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_12.jpg",
    "year": "2000"
  },
  {
    "id": 14,
    "title": "Σκύλλα &amp;amp; Χάρυβδη- Χάρυβδη (πίσω όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_13.jpg",
    "year": "2000"
  },
  {
    "id": 15,
    "title": "Δαίδαλος (μπροστά όψη &quot;Μίνωας και Δαίδαλος&quot;), 2004",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_14.jpg",
    "year": "2000"
  },
  {
    "id": 16,
    "title": "Μίνωας (πίσω όψη &quot;Μίνωας και Δαίδαλος&quot;), 2004",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_15.jpg",
    "year": "2000"
  },
  {
    "id": 17,
    "title": "Ο Κύκλος της Ζωής",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_16.jpg",
    "year": "2000"
  },
  {
    "id": 18,
    "title": "Μάνες του Κόσμου- Πυρκαγιά στο Μάτι (μπροστά όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_17.jpg",
    "year": "2000"
  },
  {
    "id": 19,
    "title": "Μάνες του Κόσμου-Πυρκαγιά στο Μάτι (πίσω όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_18.jpg",
    "year": "2000"
  },
  {
    "id": 20,
    "title": "Μάνες του Κόσμου- Κάψιμο (λεπτομέρεια)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_19.jpg",
    "year": "2000"
  },
  {
    "id": 21,
    "title": "Ψυχές, 1999",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_20.jpg",
    "year": "2000"
  },
  {
    "id": 22,
    "title": "Κλυταιμνήστρα και Αγαμέμνωνας (πίσω όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_21.jpg",
    "year": "2000"
  },
  {
    "id": 23,
    "title": "Κλυταιμνήστρα και Αγαμέμνωνας (μπροστά όψη)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_22.jpg",
    "year": "2000"
  },
  {
    "id": 24,
    "title": "Ερμής",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_23.jpg",
    "year": "2000"
  },
  {
    "id": 25,
    "title": "Διπρόσωπος-Ψυχές",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_24.jpg",
    "year": "2000"
  },
  {
    "id": 26,
    "title": "Δοξαστικόν, 2001",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_25.jpg",
    "year": "2000"
  },
  {
    "id": 27,
    "title": "Ένσκαφτο2",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_26.jpg",
    "year": "2000"
  },
  {
    "id": 28,
    "title": "Ερωτικό",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_27.jpg",
    "year": "2000"
  },
  {
    "id": 29,
    "title": "Ερωτικό (Πολεμιστής-πίσω πλευρά)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_28.jpg",
    "year": "2000"
  },
  {
    "id": 30,
    "title": "Τροία, 2002",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_29.jpg",
    "year": "2000"
  },
  {
    "id": 31,
    "title": "Καταφυγή στη Μητρότητα-Σαλιγκάρι, 2004 (2)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_30.jpg",
    "year": "2000"
  },
  {
    "id": 32,
    "title": "Δούρειος Ίππος",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_31.jpg",
    "year": "2000"
  },
  {
    "id": 33,
    "title": "Καταφυγή στη Μητρότητα-Σαλιγκάρι, 2004 (Πλάι)",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_32.jpg",
    "year": "2000"
  },
  {
    "id": 34,
    "title": "Κραυγές του Δάσους, 1999",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_33.jpg",
    "year": "2000"
  },
  {
    "id": 35,
    "title": "Κυνηγώντας τον Βουκεφάλα",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_34.jpg",
    "year": "2000"
  },
  {
    "id": 36,
    "title": "Κυνηγώντας τις Κραυγές του Δάσους, 1999",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_35.jpg",
    "year": "2000"
  },
  {
    "id": 37,
    "title": "Μέδουσα",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_36.jpg",
    "year": "2000"
  },
  {
    "id": 38,
    "title": "Στον Αστερισμό του Λέοντος",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_37.jpg",
    "year": "2000"
  },
  {
    "id": 39,
    "title": "Στον Αστερισμό του Κριού",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_38.jpg",
    "year": "2000"
  },
  {
    "id": 40,
    "title": "Ομηρικό-Μνηστήρες",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_39.jpg",
    "year": "2000"
  },
  {
    "id": 41,
    "title": "Εναγκαλισμός",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_40.jpg",
    "year": "2000"
  },
  {
    "id": 42,
    "title": "Ολυμπιακό Πνεύμα",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_41.jpg",
    "year": "2000"
  },
  {
    "id": 43,
    "title": "Ολυμπιακό Πνεύμα",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_42.jpg",
    "year": "2000"
  },
  {
    "id": 44,
    "title": "Οικογένεια",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_43.jpg",
    "year": "2000"
  },
  {
    "id": 45,
    "title": "Μάσκα, Γλυπτό σε Ξύλο, 2002",
    "tag": "Γλυπτική",
    "category": "sculpture",
    "image": "/images/sculpture_44.jpg",
    "year": "2000"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Navigation handling (SPA Logic)
  const navLinks = document.querySelectorAll('a[data-target]');
  const sections = document.querySelectorAll('.page-section');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  function navigateTo(targetId) {
    sections.forEach(sec => sec.classList.remove('active'));
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      targetSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Close mobile menu if open
    navLinksContainer.classList.remove('show');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      navigateTo(target);
    });
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
  });

  // Render Art Grids
  const paintingGrid = document.getElementById('painting-grid');
  const sculptureGrid = document.getElementById('sculpture-grid');
  
  function renderItems(gridElement, items) {
    gridElement.innerHTML = items.map(item => `
      <div class="art-item" data-img="${item.image}">
        <img src="${item.image}" loading="lazy" alt="${item.title}">
        <div class="art-item-overlay">
          <div class="art-item-title">${item.title}</div>
        </div>
      </div>
    `).join('');
  }

  renderItems(paintingGrid, paintings);
  renderItems(sculptureGrid, sculptures);
  
  const portfolioData = [...paintings, ...sculptures];

  // Filter Logic for Paintings
  const filterBtns = document.querySelectorAll('.filter-btn');
  const subFiltersContainer = document.getElementById('painting-sub-filters');
  
  let currentTag = 'Όλα';
  let currentSubTag = 'Όλα';

  function renderSubFilters(tag) {
    if (tag === 'Όλα') {
      subFiltersContainer.innerHTML = '';
      return;
    }
    
    // Find unique subTags for this tag
    const subTags = [...new Set(paintings.filter(p => p.tag === tag && p.subTag).map(p => p.subTag))];
    
    if (subTags.length === 0) {
      subFiltersContainer.innerHTML = '';
      return;
    }
    
    let html = `<button class="sub-filter-btn active">Όλα</button>`;
    subTags.forEach(sub => {
      html += `<button class="sub-filter-btn">${sub}</button>`;
    });
    
    subFiltersContainer.innerHTML = html;
    
    // Attach events to sub-filters
    const subBtns = subFiltersContainer.querySelectorAll('.sub-filter-btn');
    subBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        subBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentSubTag = e.target.textContent;
        applyFilters();
      });
    });
  }

  function applyFilters() {
    let filtered = paintings;
    if (currentTag !== 'Όλα') {
      filtered = filtered.filter(p => p.tag === currentTag);
      if (currentSubTag !== 'Όλα') {
        filtered = filtered.filter(p => p.subTag === currentSubTag);
      }
    }
    renderItems(paintingGrid, filtered);
    attachLightboxEvents();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      currentTag = e.target.textContent;
      currentSubTag = 'Όλα'; // Reset sub filter when main filter changes
      renderSubFilters(currentTag);
      applyFilters();
    });
  });

  // Lightbox Logic
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.querySelector('.close-lightbox');

  function attachLightboxEvents() {
    document.querySelectorAll('.art-item').forEach(item => {
      item.addEventListener('click', () => {
        lightboxImg.src = item.getAttribute('data-img');
        lightbox.style.display = 'block';
      });
    });
  }

  closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Initial attach
  attachLightboxEvents();
});
