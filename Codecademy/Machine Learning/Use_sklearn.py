from movies import movie_dataset, labels
from sklearn.neighbors import KNeighborsClassifier

# setting the value of k
classifier = KNeighborsClassifier(n_neighbors = 5)

# training the classifier
classifier.fit(movie_dataset, labels)

# create a set of unknown data and have classifier guess their appropriate labels
unknown_movies = [
  [.45, .2, .5],
  [.25, .8, .9],
  [.1, .1, .9]
]

guesses = classifier.predict(unknown_movies)
print(guesses)
