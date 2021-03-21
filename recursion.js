function sum(arr, n) {
  if (n <= 0){
    return 0; 
  } esle {
    return sum(arr, n-1) + arr[n-1];
  }
}