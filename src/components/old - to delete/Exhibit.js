import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Gist from 'super-react-gist';
import {getExhibit} from '../redux/selectors/exhibits';
import ExhibitUrls from './ExhibitUrls';
import HtmlVideo from './HtmlVideo';
import './Exhibit.css';

const getOverviewParagraphs = overview => overview.trim().split('\n').map((o, idx) => 
    <p key={idx}>
        {o}
    </p>
);

const getLearntListItems = lessons => lessons.map((l, idx) => 
    <li key={idx} className="applied-technique">
        {l}
    </li>
);

const getPreviewImgs = imgs => imgs.map((img, idx) => 
    <a key={idx} href={img.src} alt="Click to view this full-size image in a new tab" target="_blank" rel="noreferrer" className="col-12 col-lg-6">
        <figure>
            <img src={img.src} alt={img.alt} className="w-100 wrapper-assets--photo" />
            <figcaption className="p-2 text-small">{img.alt}</figcaption>
        </figure>
    </a>
);

const getPreviewVids = vids => vids.map((v, idx) =>
    <div key={idx} className="col-12 col-lg-6 wrapper-assets--video">
        <HtmlVideo mp4s={[v.mp4]} />
    </div>
);

const getPreviewYoutube = youtubes => youtubes.map((url, idx) =>
    <iframe
        key={idx}
        src={url}
        title={`Embedded youtube video for ${url}`}
        width="560"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="col-12 col-lg-6 wrapper-assets--video"
    />
);

const getEmbeddedCodeSnippets = urls => urls && urls.map((u, idx) => 
    <div key={idx} className="col-12 gist-container">
        <Gist url={u} />
    </div>
);

class Exhibit extends React.Component {
    render() {
        const tagEles = this.props.item.tags.map(tag =>
            <div key={tag.text} className="d-flex align-items-center py-1 mr-4 text-small text-capitalize text-secondary">
                <i className="material-icons md-24 mr-1">{tag.icon}</i>
                <span className="d-inline text-nowrap">{tag.text}</span>
            </div>
        );

        return (
            <div className="App container-fluid">
                <div className="row">
                    <div className="col-12 page-edge-shadow"></div>
                </div>
                <div className="row App--row">
                    <aside className="col-12 col-xl-4 d-flex">
                    <aside className="d-none d-xl-flex bookmark flex-column mr-5">
                        <div>
                            <div className="d-inline-block bookmark--pagenum">
                                <i className="material-icons md-24">blur_on</i>
                            </div>
                        </div>
                        <div className="bookmark--name d-flex align-items-center justify-content-center pt-5 text-nowrap text-uppercase">
                            software engineer portfolio
                        </div>
                    </aside>
                    <aside className="d-flex flex-column flex-grow-1 ml-4 text-left wrapper-textual">
                        <div className="text-small text-uppercase">
                            <Link to="/" className="text-bold">
                                home
                            </Link><span className="text-secondary"> &gt; exhibit</span>
                        </div>
                        <div className="d-flex flex-column text-uppercase text-lighter wrapper-textual--title">
                            <div className="mt-1 mb-3">
                                <div className="text-break text-powder-blue wrapper-textual--title--text">{this.props.item.title}</div>
                            </div>
                        </div>
                        <div className="mt-5 mb-3 divider"></div>
                        <div className="d-flex mb-3">
                            <div className="text-bold wrapper-textual--headline">
                                {this.props.item.preview.about}
                            </div>
                        </div>
                        <div className="d-flex flex-wrap mb-5">
                            {tagEles}
                        </div>
                        <section className="mt-4 row wrapper-textual--article">
                        <div className="col-12 col-md-6">
                            <p className="text-bold">
                                Abstract
                            </p>
                            {getOverviewParagraphs(this.props.item.overview)}
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="text-bold">
                            Applied techniques
                            </p>
                            <div>
                                <ul className="pl-3">
                                    {getLearntListItems(this.props.item.learnt)}
                                </ul>
                            </div>
                        </div>
                        </section>
    
                        <section className="mt-5 mb-5 wrapper-textual--table-of-contents">
                            <ExhibitUrls urlsByType={this.props.item.urlsByType} />
                        </section>
                    </aside>
                    </aside>
                    <main className="col-12 col-xl-7 offset-xl-1 wrapper-gallery wrapper-assets">
                        <div className="row">
                            {this.props.item.preview.images && getPreviewImgs(this.props.item.preview.images)}
                            {this.props.item.preview.videos && getPreviewVids(this.props.item.preview.videos)}
                            {this.props.item.preview.youtubes && getPreviewYoutube(this.props.item.preview.youtubes)}
                            {this.props.item.codeSnippets && this.props.item.codeSnippets.length && getEmbeddedCodeSnippets(this.props.item.codeSnippets)}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    item: getExhibit(state, props.match.params.id)
});

export default connect(mapStateToProps)(Exhibit);
