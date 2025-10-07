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
    //
    cout<<"Elements at the even index: ";
    for(int i = 0; i < a  ; i++ ){
       if(i%2==0)
       cout<<vec[i]<<" ";
    }
    cout<<endl;
    cout<<"Elements at the odd index : ";
     for(int i = 0; i < a  ; i++ ){
       if(i%2!=0)
       cout<<vec[i]<<" ";
         
     }
    //
    ///
    
}