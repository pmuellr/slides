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
  [here](<https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/systemuapi/#nodejsApplication)

--------------------------------------------------------------------------------

### supported programming languages - Java

pre-reqs for Java development

* install Eclipse ([Luna](https://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/lunasr1))
* install [Bluemix tools for Eclipse](https://www.ng.bluemix.net/docs/#manageapps/eclipsetools/eclipsetools.html#eclipsetools)
* install WebSphere Software (in Eclipse Help menu)
* install [`cf` command-line tool](https://www.ng.bluemix.net/docs/#starters/install_cli.html)
  (optional, but you will probably want it)

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

--------------------------------------------------------------------------------

### Watson - Language Identification

--------------------------------------------------------------------------------

### Watson - Machine Translation

--------------------------------------------------------------------------------

### Watson - Message Resonance

--------------------------------------------------------------------------------

### Watson - Question and Answer

--------------------------------------------------------------------------------

### Watson - Relationship Extraction

--------------------------------------------------------------------------------

### Watson - User Modeling

--------------------------------------------------------------------------------

### Watson - Visualization Rendering

--------------------------------------------------------------------------------

### Watson - more services!

* new Watson services will be released over time

* check the [Watson Developer Cloud](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/)
  for updates

--------------------------------------------------------------------------------

### Watson Service -



================================================================================

class: center, middle

# `fin`
