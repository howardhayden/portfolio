function Book(title, language, publisher, date, authors, collections) {
  this.title = title;
  this.language = language;
  this.publisher = publisher;
  this.date = new Date(date);
  this.authors = authors;
  this.collections = collections;
}

var books = [
  new Book(
    "Ethical Machines",
    ["English"],
    ["Harvard Business Review Press"],
    "2022-09-20",
    ["Reid Blackman"],
    ["Business", "Technology"],
  ),
  new Book(
    "Getting to Maybe: How to Excel on Law School Exams",
    ["English"],
    ["Carolina Academic Press"],
    "1999-05-26",
    ["Richard Fischl", "Jeremy Paul"],
    ["Legal"],
  ),
  new Book(
    "Commencer à Vivre Humainement - Lettres",
    ["French"],
    ["LIBERTALIA"],
    "2022-01-11",
    ["Rosa Luxemburg"],
    ["Civil"]
  ),
  new Book(
    "La police du futur - le marché de la violence et ce qui lui résiste",
    ["French"],
    ["Revue du Crieur"],
    "2022-03-17",
    ["Mathieu Rigouste"],
    ["Policing", "Technology"]
  ),
  new Book(
    "Défaire la police",
    ["French"],
    ["Divergences"],
    "2021-11-15",
    [" Jérôme Baschet", " Elsa Dorlin", "Irene", "Guy Lerouge", "Serge Quadruppani", "Collectif"],
    ["Policing", "Civil"]
  ),
  new Book(
    "Modern Grantmaking: A Guide for Funders who Believe Better Is Possible",
    ["English"],
    ["Modern Grantmaking"],
    "2022-05-22",
    ["Gemma Bull", "Tom Steinberg"],
    ["Business"]
  ),
  new Book(
    "Brief: Make a Bigger Impact by Saying Less",
    ["English"],
    ["Wiley"],
    "2014-02-10",
    ["Joseph McCormack"],
    ["Communication"]
  ),
  new Book(
    "Nice Racism: How Progressive White People Perpetuate Racial Harm",
    ["English"],
    ["Beacon Press"],
    "2021-06-29",
    ["Robin Diangelo"],
    ["Social"]
  ),
  new Book(
    "Revolutionary Mathematics: Artificial Intelligence, Statistics and the Logic of Capitalism",
    ["English"],
    ["Verso"],
    "2022-01-18",
    ["Justin Joque"],
    ["Technology", "Business", "Civil"]
  ),
  new Book(
    "Masked by Trust: Bias in Library Discovery",
    ["English"],
    ["Library Juice Press"],
    "2019-06-01",
    ["Matthew Reidsma"],
    ["Libraries"]
  ),
  new Book(
    "Managing Data for Patron Privacy: Comprehensive Strategies for Libraries",
    ["English"],
    ["ALA Editions"],
    "2022-08-08",
    ["Kristin Briney", "Becky Yoose"],
    ["Libraries"]
  ),
  new Book(
    "Anonymity",
    ["English"],
    ["ALA Neal-Schuman"],
    "2019-05-21",
    ["Alison Macrina", "Talya Cooper"],
    ["Libraries"]
  ),
  new Book(
    "Data Cartels: The Companies That Control and Monopolize Our Information",
    ["English"],
    ["Stanford University Press"],
    "2022-11-08",
    ["Sarah Lamdan"],
    ["Technology", "Business"]
  ),
  new Book(
    "Algorithms of Oppression: How Search Engines Reinforce Racism",
    ["English"],
    ["NYU Press"],
    "2018-02-20",
    ["Safiya Umoja Noble"],
    ["Technology", "Social"]
  ),
  new Book(
    "Night in the Woods",
    ["English", "Japanese"],
    ["Finji"],
    "2017-02-21",
    ["Infinite Fall"],
    ["Gaming"]
  ),
  new Book(
    "Oxenfree",
    ["English", "French", "Italian", "German", "Spanish - Spain", "Russian", "Simplified Chinese"],
    ["Night School Studio"],
    "2016-01-15",
    ["Night School Studio"],
    ["Gaming"]
  ),
  new Book(
    "A Short Hike",
    ["English", "French", "Spanish - Latin America", "Japanese", "Portuguese - Brazil"],
    ["Whippoorwill"],
    "2019-04-05",
    ["Adam Robinson-Yu", "Adamgryu"],
    ["Gaming"]
  )
];
