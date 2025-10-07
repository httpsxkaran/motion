#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> vec;
    int a;
    int avg = 0, res = 1, sum = 0;
    int small = INT8_MAX;
    int max = INT8_MIN;
    cout<<"Enter the number of inputs"<<endl;
    cin>>a;
    vec.resize(a);
    for(int i = 0; i < a ; i++ ){
        cin>>vec[i];
    }
    for(int i = a/2; i < a ; i++ ){
       sum += vec[i];
    }
    cout<<sum;
    //
    ///
    
}