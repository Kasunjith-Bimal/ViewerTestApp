import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService,
  FormFieldAddArgs,
} from '@syncfusion/ej2-angular-pdfviewer';
import { HttpClient } from '@angular/common/http';
import { Tooltip } from '@syncfusion/ej2-popups';

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
    FormDesignerService,
  ],
})

export class AppComponent {
 public selectedDocName : string =""
  constructor(private http: HttpClient) {}
  // public service: string =
  // 'https://localhost:44311/api/pdfviewer';

   public service: string =
  'https://localhost:44311/api/pdfviewer';
  
  // https://eviasea.enadocapp.com/_apis/sign/pdf/api/Pdfviewer
  public documents : any[]=[
    {
    "document": 'C:/Users/enado/OneDrive/Documents/test files/1.pdf',
    "documentName":'24mb2.pdf',
    "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzkyZ1phTnB2V0I5emdzNElTSGFWaStZTklmcTAwVXM0Z0w0ckVKZnlueGhNRlpNcllEYm9SZEZRV1dmV2JWRFBsREM3SlZsVEpTNkRXMU1HVHBBMDZNV2NOcitWRlFjcmwzSU1jcVlJMkVOcDRIeWh5S2crdy9NYnVLNVVjeVA2VXc9PQ=='
    },
    {
    "document": 'C:/Users/enado/OneDrive/Documents/test files/abc.pdf',
    "documentName":'abc.pdf',
    "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzl3akY3aWpKUlFxYlJkc3lQZSt0ZjBrUTk0SVd5RWgxWjFnbkVEWXV0RjV5QklSUHNpcVR0TTJVMVFwdVdhZnk0YkVrR3VuY3lmL2k1ZE00cGVLOWh0OHZ0TTMrSjUvak4zaWphQTM3VEdBZElQOThLcUNob3dEZVQyVHhOZUJubXc9PQ=='
    },
    {
    "document": 'C:/Users/enado/OneDrive/Documents/test files/xyz.pdf',
    "documentName":'xyz.pdf',
    "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk2QXd2SWRMTmxyV0RESUJZUHdhRDRHQy9KbXVpMDhYK3EvdEF4STNtamRSdkpCZ05BVUdkdFJBYVFRQy9TMnZzRTZmL2lFSkduWGdCaEw5dDkyY09ZVFR3QzZjNlJ4UVNkVDhDdFJTcnFodUlFSmVwdDl5Z3Jna1NxcEEvZm9xd0E9PQ=='
    },
    {
      "document": 'C:/Users/enado/OneDrive/Documents/test files/lala.pdf',
       "documentName":'lala.pdf',
       "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk4ZnRLM1R3WHF1aldjeVVDb1FvOG94a0tkQUhwaFl2UTM2UFRucUVobjhrV254emFQUHFTc0FBWnBld0tRY0JMcXF2Ny90TWdUc0RSZXRSQ295SkVyTmRiRlpRcTFOdXFydUhySzNBbVlRL3oyUkVFbDllemcwNmxxQ0NWN0hidnc9PQ=='
    },
    {
      "document": 'C:/Users/enado/OneDrive/Documents/test files/tata.pdf',
      "documentName":'6mb.pdf',
      "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzkzZU8wVmNVR3dDWVcwbTdabUk5eC9aY1BpNTYrckxvVktheTZDV1RsTHNnMU5NbzRyNzlxZnpTMXVma3FpNjVuSllEWFdNMmVzbEFBOFhQajMyTVYyM1ZuckM4WUF2MEJvNmpoN3lOdnlLZVg3ZVJaSHJGWXZvTVpuaVVaYlh2cWc9PQ=='
    },
    {
      "document": 'C:/Users/enado/OneDrive/Documents/test files/a.pdf',
      "documentName":'12mb.pdf',
      "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk1czdwc3duMTJGenAvS3E5b0xUbVJ3OExkVWlCWFp0US9HLzJzc1J3Z0xBejBZL25rclBCQ0RPR3ZtaU1PQmRHZGczcVpjL000UDNleWZONVBWMHJsWjZWemhMWm1WcnJ5YlBsb2RhQ3gzaTJmbnY2dE5UTVlUYWdYWlJHV2xXOGc9PQ=='
    },
    {
      "document": 'C:/Users/enado/OneDrive/Documents/test files/b.pdf',
      "documentName":'7mb.pdf',
      "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzl3akY3aWpKUlFxYlJkc3lQZSt0ZjBtbXdJSVVKSlZiVGlaQUpBQlBYemEvN3cvYmdsVVJ0VDBCekpuWmZtTWJ0dytLMnJ2TUhlYnlmaWlKMGlTdTN6SzdEZTNVWFplb3VrTE5FNi8rTkN2YWFlN1o5V3BSS2V4enhTVjltdURscHc9PQ=='
    },
    {
      "document": 'C:/Users/enado/OneDrive/Documents/test files/c.pdf',
      "documentName":'24.pdf',
      "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzkyZ1phTnB2V0I5emdzNElTSGFWaStZTklmcTAwVXM0Z0w0ckVKZnlueGhNRlpNcllEYm9SZEZRV1dmV2JWRFBsREM3SlZsVEpTNkRXMU1HVHBBMDZNV2NOcitWRlFjcmwzSU1jcVlJMkVOcDRIeWh5S2crdy9NYnVLNVVjeVA2VXc9PQ=='
    },
    {
      "document": 'C:/Users/enado/OneDrive/Documents/test files/dudu.pdf',
       "documentName":'10mb.pdf',
       "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk5enZVN0VDWjZYdlRyTG1QamhaTTFqb3pUaE8rWkRubjB0em9qQ0V5U3dZNEhYelZFb21zUjR5ZWIxcm5hSXk0SVZVLzBwNGttZjV3SDFsOVFJOEtYTUdqU0cwaDRBcVUxQmV0bE1oR2dnVGpSdVdXQkJYU2lFUVMrTTJLWWM5bWc9PQ=='
    },
    {
      "document": 'C:/Users/enado/OneDrive/Documents/test files/e.pdf',
       "documentName":'e.pdf',
       "documentPath":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzl3akY3aWpKUlFxYlJkc3lQZSt0ZjBuSzU3ZGdSbVhWRTJGK3BuV2ZwaHpPcHVpUGNYUUsvcHl6MzF5U0poOVljbXVHN1VYMC9HWnRUWktQVnlJREkyM24rY1h2WldIVnFML0V5dkdYalhEbUNLOFJpYzBJam5hbjBpQVI4aVVpSVE9PQ=='
    }
 ];

  public documentList : any[]=[
  {
    
  "documentName":'24mb2.pdf',
  "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzkyZ1phTnB2V0I5emdzNElTSGFWaStZTklmcTAwVXM0Z0w0ckVKZnlueGhNRlpNcllEYm9SZEZRV1dmV2JWRFBsREM3SlZsVEpTNkRXMU1HVHBBMDZNV2NOcitWRlFjcmwzSU1jcVlJMkVOcDRIeWh5S2crdy9NYnVLNVVjeVA2VXc9PQ==',
  "requestType":1
  },
  {
  "documentName":'abc.pdf',
  "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzl3akY3aWpKUlFxYlJkc3lQZSt0ZjBrUTk0SVd5RWgxWjFnbkVEWXV0RjV5QklSUHNpcVR0TTJVMVFwdVdhZnk0YkVrR3VuY3lmL2k1ZE00cGVLOWh0OHZ0TTMrSjUvak4zaWphQTM3VEdBZElQOThLcUNob3dEZVQyVHhOZUJubXc9PQ==',
  "requestType":1
  },
  {
  "documentName":'xyz.pdf',
  "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk2QXd2SWRMTmxyV0RESUJZUHdhRDRHQy9KbXVpMDhYK3EvdEF4STNtamRSdkpCZ05BVUdkdFJBYVFRQy9TMnZzRTZmL2lFSkduWGdCaEw5dDkyY09ZVFR3QzZjNlJ4UVNkVDhDdFJTcnFodUlFSmVwdDl5Z3Jna1NxcEEvZm9xd0E9PQ==',
  "requestType":1
  },
  {
    "documentName":'lala.pdf',
     "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk4ZnRLM1R3WHF1aldjeVVDb1FvOG94a0tkQUhwaFl2UTM2UFRucUVobjhrV254emFQUHFTc0FBWnBld0tRY0JMcXF2Ny90TWdUc0RSZXRSQ295SkVyTmRiRlpRcTFOdXFydUhySzNBbVlRL3oyUkVFbDllemcwNmxxQ0NWN0hidnc9PQ==',
     "requestType":1
  },
  {
    "documentName":'6mb.pdf',
    "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzkzZU8wVmNVR3dDWVcwbTdabUk5eC9aY1BpNTYrckxvVktheTZDV1RsTHNnMU5NbzRyNzlxZnpTMXVma3FpNjVuSllEWFdNMmVzbEFBOFhQajMyTVYyM1ZuckM4WUF2MEJvNmpoN3lOdnlLZVg3ZVJaSHJGWXZvTVpuaVVaYlh2cWc9PQ==',
    "requestType":1
  },
  {
    "documentName":'12mb.pdf',
    "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk1czdwc3duMTJGenAvS3E5b0xUbVJ3OExkVWlCWFp0US9HLzJzc1J3Z0xBejBZL25rclBCQ0RPR3ZtaU1PQmRHZGczcVpjL000UDNleWZONVBWMHJsWjZWemhMWm1WcnJ5YlBsb2RhQ3gzaTJmbnY2dE5UTVlUYWdYWlJHV2xXOGc9PQ==',
    "requestType":1
  },
  {
    "documentName":'7mb.pdf',
    "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzl3akY3aWpKUlFxYlJkc3lQZSt0ZjBtbXdJSVVKSlZiVGlaQUpBQlBYemEvN3cvYmdsVVJ0VDBCekpuWmZtTWJ0dytLMnJ2TUhlYnlmaWlKMGlTdTN6SzdEZTNVWFplb3VrTE5FNi8rTkN2YWFlN1o5V3BSS2V4enhTVjltdURscHc9PQ==',
    "requestType":1
  },
  {
    "documentName":'24.pdf',
    "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzkyZ1phTnB2V0I5emdzNElTSGFWaStZTklmcTAwVXM0Z0w0ckVKZnlueGhNRlpNcllEYm9SZEZRV1dmV2JWRFBsREM3SlZsVEpTNkRXMU1HVHBBMDZNV2NOcitWRlFjcmwzSU1jcVlJMkVOcDRIeWh5S2crdy9NYnVLNVVjeVA2VXc9PQ==',
    "requestType":1
  },
  {
    "documentName":'10mb.pdf',
     "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzk5enZVN0VDWjZYdlRyTG1QamhaTTFqb3pUaE8rWkRubjB0em9qQ0V5U3dZNEhYelZFb21zUjR5ZWIxcm5hSXk0SVZVLzBwNGttZjV3SDFsOVFJOEtYTUdqU0cwaDRBcVUxQmV0bE1oR2dnVGpSdVdXQkJYU2lFUVMrTTJLWWM5bWc9PQ==',
     "requestType":1
  },
  {
    "documentName":'e.pdf',
     "documentUrl":'Z0hKYWVsUXhJU2NLRm5HNnppeEpJT3MxWGNZb09IYU9vZTZXeUtOZWp2Y0pyamdWOTdITFlSQUQ1NjdqRGtsSjZYK0lZRlZmWU45SXB4VjhweDhnM256V1hqaHdnSUgrTEpFWDZkWWZaSzk0Tk5iSXRlKzZYaUFlM1d5TFcvSEd1azhIaVFOWG5zeXhXK0xYVWNhdzl3akY3aWpKUlFxYlJkc3lQZSt0ZjBuSzU3ZGdSbVhWRTJGK3BuV2ZwaHpPcHVpUGNYUUsvcHl6MzF5U0poOVljbXVHN1VYMC9HWnRUWktQVnlJREkyM24rY1h2WldIVnFML0V5dkdYalhEbUNLOFJpYzBJam5hbjBpQVI4aVVpSVE9PQ==',
     "requestType":1
  }
];
  document : any 
  ngOnInit(): void {
    // ngOnInit function
    this.firstOpen(this.documents[0].documentPath);
  }

  // showPdf(d: any): void{
  //   // const fileReader = new FileReader();
  //   // fileReader.readAsArrayBuffer(new Blob([document.document]));

  //   // fileReader.onload = () => {
  //   //   const fileContents = fileReader.result;

  //   //   console.log(fileContents);
  //   // };
  //   this.document = d.document;
  //   var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  //   viewer.saveAsBlob().then(function (value: any) {
  //      var data = value; 
  //      var reader = new FileReader(); 
  //      reader.readAsDataURL(data); 
  //      reader.onload = () => {
  //        var base64data = reader.result; // get base 64 string. 
  //        console.log(base64data); 
  //       }; 
  //     });
  // }

  firstOpen(parth: string){
    this.selectedDocName = this.documents[0].documentName;
    let documentViewrJson = {
      "documentUrl": parth,
      "requestType": 1
    };

    this.document = JSON.stringify(documentViewrJson);
  }

  showPdf(doc:any) { 
    console.log(doc);
    this.selectedDocName = doc.documentName;
    let documentViewrJson = {
      "documentUrl": doc.documentPath,
      "requestType": 1
    };

    this.document = JSON.stringify(documentViewrJson);
  } 

}
