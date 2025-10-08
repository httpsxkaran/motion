#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> vec;
    int a, res ;
    int avg = 0, sum = 0;
    int K=0;
    int small = INT8_MAX;
    int max = INT8_MIN;
    cout<<"Enter the number of inputs"<<endl;
    cin>>a;
    vec.resize(a);
    for(int i = 0; i < a ; i++ ){
        cin>>vec[i];
    }
      for(int i = 0; i<a; i++){
        for(int j = 0; j<a ; j++){
            if(vec[i]==vec[j]){
                K++;
            }
        }
        if(K>1)
        res = K;
        if(res<small){
           small = K;
           max = vec[i];
        }
        K = 0;
      }
      if(small<2)
      cout<<"-1";
      else cout<<max;
}
