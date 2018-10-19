# importing what we'll need...
import codecademylib3_seaborn
from sklearn.datasets import load_breast_cancer
breast_cancer_data = load_breast_cancer()

# print so we can see the data we'll be playing with
print(breast_cancer_data.data[0])
print(breast_cancer_data.feature_names)
print(breast_cancer_data.target)
print(breast_cancer_data.target_names)

# split into training and validation sets
from sklearn.model_selection import train_test_split
training_data, validation_data, training_labels, validation_labels = train_test_split(breast_cancer_data.data, breast_cancer_data.target, test_size = 0.2, random_state = 100)

# checking to make sure it worked correctly. These should print the same num
print(len(training_data))
print(len(training_labels))

# classify data, set value of k, and check validity for a range of possible k values. Store this list.
from sklearn.neighbors import KNeighborsClassifier
accuracies = []
for k in range(1, 101):
  classifier = KNeighborsClassifier(n_neighbors = k)
  classifier.fit(training_data, training_labels)
  accuracies.append(classifier.score(validation_data, validation_labels))
  
# graph validation accuracies
import matplotlib.pyplot as plt
k_list = range(1, 101)
plt.plot(k_list, accuracies)
plt.xlabel("k")
plt.ylabel("Validation Accuracy")
plt.title("Breast Cancer Classifier Accuracy")
plt.show()
