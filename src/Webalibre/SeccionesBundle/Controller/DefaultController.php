<?php

namespace Webalibre\SeccionesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction($name)
    {
        return $this->render('WebalibreSeccionesBundle:Default:index.html.twig', array('name' => $name));
    }
}
