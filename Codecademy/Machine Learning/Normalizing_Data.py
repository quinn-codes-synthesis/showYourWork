release_dates = [1897, 1998, 2000, 1948, 1962, 1950, 1975, 1960, 2017, 1937, 1968, 1996, 1944, 1891, 1995, 1948, 2011, 1965, 1891, 1978]

def min_max_normalize(lst):
  minimum = min(lst)
  maximum = max(lst)
  normalized = []
  for i in range(len(lst)):
    normed = 0
    normed += (lst[i] - minimum) / (maximum - minimum)
    normalized.append(normed)
  return normalized

print(min_max_normalize(release_dates))
