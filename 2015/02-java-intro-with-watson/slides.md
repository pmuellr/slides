# introduction to using Watson Services with Java on Bluemix

Patrick Mueller
[`@pmuellr`](https://twitter.com/pmuellr),
[`muellerware.org`](http://muellerware.org)<br>
developer advocate for IBM's [Bluemix](http://bluemix.net) PaaS<br>

<div class="smaller">
<a href="http://pmuellr.github.io/slides/2015/02-java-intro-with-watson">
         http://pmuellr.github.io/slides/2015/02-java-intro-with-watson
</a>
<br>
<a href="http://pmuellr.github.io/slides/">
         http://pmuellr.github.io/slides/
        (all slides)
</a>
</div>

<div class="toolBar no-print">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

---

layout: true

<div class="page-icon">
<span class="smaller"><span class="smaller"><span class="smaller">
<tt>Java + Watson on Bluemix</tt>
</span></span></span>
<!--
  <img height=24 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png">
  &nbsp;
  <img height=24 src="../../images/js.png">
  &nbsp;
-->
</div>

{{content}}

<div class="toolBar no-print">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

--------------------------------------------------------------------------------

### what is Bluemix

* Platform-as-a-Service aka PaaS aka web app hosting platform

* you provide the app, Bluemix hosts the app

--------------------------------------------------------------------------------

### deployment process

* you push your application code to Bluemix

* Bluemix stages your app; finds runtimes, libraries your app uses

* Bluemix builds a "droplet"; archive of app code, runtimes, libraries

* Bluemix provisions VM to run the droplet, unpacks droplet, starts it

--------------------------------------------------------------------------------

### references

* [Bluemix console](https://console.ng.bluemix.net)
* [Bluemix documentation](https://www.ng.bluemix.net/docs/)
* [Eclipse tools for Bluemix](https://www.ng.bluemix.net/docs/#manageapps/eclipsetools/eclipsetools.html#eclipsetools)

Bluemix Answers
* <a class="smaller" href="https://developer.ibm.com/answers/smartspace/bluemix/">https://developer.ibm.com/answers/smartspace/bluemix/</a>
* open to the public
* thousands of questions already asked and answered
* please ask any questions here, but no IBM Confidential or IBM internal
  questions

--------------------------------------------------------------------------------

### articles / movies

* [Getting Started with IBM Bluemix and DevOps Services using Java](https://hub.jazz.net/tutorials/jazzeditorjava/)

* [Developing IBM Bluemix applications in Java with Eclipse and DevOps Services](https://hub.jazz.net/tutorials/jazzrtc/)

* [Work locally with IBM DevOps Services projects and Git source control](http://www.ibm.com/developerworks/library/d-bluemix-javadevops/index.html)

* [Video: Develop and manage Java Apps with IBM Bluemix and DevOps Services](http://www.ibm.com/developerworks/library/d-bluemix-javadevops/index.html)

--------------------------------------------------------------------------------

### sign up for Bluemix and Dev Ops Services

* for Bluemix, register here (click on **SIGN UP**):

  <https://bluemix.net>

* for Dev Ops Services, register here:

  <https://jazz.net/action/register>

  use the same userid/password as for Bluemix

--------------------------------------------------------------------------------

### supported programming languages

* just about anything

* 1st class support for Java (using Liberty) and node.js

* community support for PHP, Ruby, Python, others

--------------------------------------------------------------------------------

### supported programming languages - node.js

* <http://node-stuff.mybluemix.net/how-to>

  * lists pre-reqs to install

  * sample app with instructions to deploy yourself

* Watson User Modeling sample for node.js available
  [here](<https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/systemuapi/#nodejsApplication>)

--------------------------------------------------------------------------------

### supported programming languages - Java

pre-reqs for Java development

* install Eclipse ([Luna](https://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/lunasr1))
* install [Bluemix tools for Eclipse](https://www.ng.bluemix.net/docs/#manageapps/eclipsetools/eclipsetools.html#eclipsetools)
* install WebSphere Software (in Eclipse Help menu)
* install [`cf` command-line tool](https://www.ng.bluemix.net/docs/#starters/install_cli.html)
  (optional, but you will probably want it)

--------------------------------------------------------------------------------

### supported development environments

* command-line; using text editors or IDEs, and the `cf` command-line tool

* Eclipse using `cf` command-line tool, or Bluemix plugin for Eclipse

* Dev Ops Services - <http://hub.jazz.net>; edit, build, deploy all from the web

--------------------------------------------------------------------------------

### Watson User Modeling sample for Java

* code / instructions, available here:

<a class="smaller" href="https://hub.jazz.net/project/pmuellr/um-java/overview">
         https://hub.jazz.net/project/pmuellr/um-java/overview
</a>

* (live demo of deploying app using IDS)

--------------------------------------------------------------------------------

### Watson User Modeling sample for Java - using Eclipse

* import um-java project using Eclipse git

* deployment options

  * commit to git, let IDS redeploy to Bluemix

  * deploy directly using Eclipse for Bluemix tools

--------------------------------------------------------------------------------

### other goodies for Bluemix using Eclipse

* [incremental publish](https://www.ng.bluemix.net/docs/#manageapps/eclipsetools/eclipsetools.html#incrementalpublish)

* [remote debug](https://www.ng.bluemix.net/docs/#manageapps/eclipsetools/eclipsetools.html#remotedebug)

================================================================================

class: center, middle

# Java code examples

--------------------------------------------------------------------------------

### using Watson services from Java

* bind service to app in Bluemix console

* use `VCAP_SERVICES` environment variable to get URL and credentials for service

* make REST calls to service


--------------------------------------------------------------------------------

### example `VCAP_SERVICES`

```json
{
  "user_modeling": [
    {
      "name": "watson-user-modeling",
      "label": "user_modeling",
      "plan": "user_modeling_free_plan",
      "credentials": {
        "url": "https://gateway.watsonplatform.net/systemu/service/",
        "username": "<secret username>",
        "password": "<secret password>"
      }
    }
  ]
}
```

--------------------------------------------------------------------------------

### parsing `VCAP_SERVICES` in Java - libraries

`com.ibm.websphere.appserver.api.json_1.0.2.jar`

* available for local usage in `um-java` sample,
  in `um-java/lib` directory

* provided automatically when deploying to Bluemix

--------------------------------------------------------------------------------

### parsing `VCAP_SERVICES` in Java - code

```java
import com.ibm.json.java.JSONArray;
import com.ibm.json.java.JSONObject;

JSONObject getVcapServices() {
  String envServices = System.getenv("VCAP_SERVICES");

  if (envServices == null) return null;
  JSONObject sysEnv = null;
  try {
     sysEnv = JSONObject.parse(envServices);
  }
  catch (IOException e) {
    String message = "Error parsing VCAP_SERVICES: ";
    logger.log(Level.SEVERE, message + e.getMessage(), e);
  }
  return sysEnv;
}

```

--------------------------------------------------------------------------------

### getting service credentials from parsed `VCAP_SERVICES` in Java

```java
// serviceName = "user_modeling";
private void processVCAP_Services(serviceName) {
  JSONObject sysEnv = getVcapServices();
  if (sysEnv == null) return;

  for (Object key : sysEnv.keySet()) {
    String keyString = (String) key;
    if (keyString.startsWith(serviceName)) {
      JSONArray services = (JSONArray)sysEnv.get(key);
      JSONObject service = (JSONObject)services.get(0);
      JSONObject credentials;

      credentials = (JSONObject)service.get("credentials");
      baseURL  = (String)credentials.get("url");
      username = (String)credentials.get("username");
      password = (String)credentials.get("password");
    }
  }
}

```

--------------------------------------------------------------------------------

### accessing a RESTy service in Java - libraries

* use [Apache HttpComponents](http://hc.apache.org/) for RESTy libraries

* provided with Bluemix libraries for Eclipse

* provided automatically when deploying to Bluemix

--------------------------------------------------------------------------------

### issuing REST request in Java

```java
Executor ex = Executor.newInstance().auth(username, password);
URI profileURI = new URI(baseURL + "api/v2/profile").normalize();

Request profileRequest = Request.Post(profileURI)
  .addHeader("Accept", "application/json")
  .bodyString(content.toString(), ContentType.APPLICATION_JSON);
String profileString = ex.execute(profileRequest)
  .handleResponse(new ResponseHandler<String>() {
    @Override
    public String handleResponse(HttpResponse r)
        throws ClientProtocolException, IOException {
      int statusCode = r.getStatusLine().getStatusCode();
      if (statusCode != HttpStatus.SC_OK) {
        req.setAttribute("error", handleError(r));
        return null;
      }
      return EntityUtils.toString(r.getEntity());
    }
});
```

--------------------------------------------------------------------------------

### input and output of REST request

* in previous example, `content` was the input, and `profileString` was
  the output, `baseURL`, `username`, `password` came from `VCAP_SERVICES`

* input and output will often be JSON format

* parse like `VCAP_SERVICES` example

* JSON utilities can also be used to generate correctly formatted JSON for
  input, from Java data structures

================================================================================

class: center, middle

# overview of Watson services

--------------------------------------------------------------------------------

### Watson - Concept Expansion

[Maps euphemisms or colloquial terms to more commonly understood phrases](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/concept-expansion.html)

* input: starting point word, a few terms that are examples of that word, and a
data set to analyze

* output: a ranked list of terms with contextually similarity to the starting word

* data sets:
  periodically updated random tweets,
  Medical transcript samples from MTSamples

--------------------------------------------------------------------------------

### Watson - Language Identification

[Identifies the language in which text is written](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/language-identification.html)

* supports:  <span class="smaller"><span class="smaller">
  Arabic; Chinese (Simplified); Chinese (Traditional); Cyrillic;
  Danish; Dutch; English; Farsi; Finnish; French; German; Greek; Hebrew;
  Hindi; Icelandic; Italian; Japanese; Korean; Norwegian (Bokmal);
  Norwegian (Nynorsk); Portuguese; Spanish; Swedish; Turkish; Urdu.
  </span></span>

* input: text
* output: 5-letter ISO language code; eg, "`en-US`"

--------------------------------------------------------------------------------

### Watson - Machine Translation

[Translate text from one language to another](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/machine-translation.html)

* supports: English, Brazilian Portuguese, Spanish, French and Arabic

* input: text to be translated

* output: translated text

--------------------------------------------------------------------------------

### Watson - Message Resonance

[Communicate with people with a style and words that suits them](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/message-resonance.html)

* input: term to evaluate and community to measure against

* output: score ranking of how well term will be received by community

* communities:
  **"cloud"** twitter messages
  or
  **"big data"** twitter messages

--------------------------------------------------------------------------------

### Watson - Question and Answer

[Direct responses to user inquiries fueled by primary document sources](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/question-answer.html)

* input: questions and which data set to query

* output: multiple answers with confidence scores and links to evidence

* data sets:
  **Healthcare data** (including Healthfinder and CDC Health Topics) or
  **Travel data** (including Wikivoyage, TSA, and CDC Travel)

--------------------------------------------------------------------------------

### Watson - Relationship Extraction

[Intelligently finds relationships between sentence components
(nouns, verbs, subjects, objects, etc.)](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/relationship-extraction.html)

* input: text news articles

* output: entities from text and relationships in XML data structure

* input is processed over a domain optimized for news articles

--------------------------------------------------------------------------------

### Watson - User Modeling

[Improves understanding of people's preferences to help engage users on their
own terms](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/user-modeling.html)


* input: text from an individual

* output: tree of social characteristcs in JSON and visualizations using HTML
  and SVG

* input should be at least 1000 words of text written by one individual

--------------------------------------------------------------------------------

### Watson - Visualization Rendering

[Graphical representations of data analysis for easier understanding](
  http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/visualization-rendering.html)

* This service is an SDK that can be used to visualize any numeric data

* aka RAVE

* supports iOS, Android, Java and JavaScript

--------------------------------------------------------------------------------

### Watson - more services!

* new Watson services will be released over time

* check the [Watson Developer Cloud](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/)
  for updates

================================================================================

class: center, middle

# `fin`
