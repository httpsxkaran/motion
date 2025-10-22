#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> vec;
    int a, res = 0, res1 = 0, min = INT8_MAX ;
    int avg = 1, sum = 0;
    int count = 1;
    int small = INT8_MAX;
    int b,max = INT8_MIN;
    cout<<"Enter the number of inputs"<<endl;
    cin>>a;
    vec.resize(a);

    for(int i = 0; i < a ; i++ ){
        cin>>vec[i];
    }

   for(int i = 0; i<a ; i++){
    sum = vec[i];
    for(int j = i+1; j< a ; j++){
        sum +=vec[j];
        if(sum%2==0){
            
              for( int k = i;k<=j; k++){
                cout<<vec[k]<<" ";
                
              }
              cout<<endl;
        }
    }
   
    
      
      

   } 

}
